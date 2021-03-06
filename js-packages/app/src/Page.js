import React, { Component, Fragment } from 'react';
import { RemotePost } from '@calderawp/components';

/**
 <RemotePost
 post={post}
 showFullContent={true}
 />
 */

const fetch = require('isomorphic-fetch');
async function getPage(pageSlug) {
	return fetch('http://localhost:3000/wp-json/wp/v2/pages/?slug=' + pageSlug)
		.then(r => r.json())
		.then(pages => {
			if (pages.length) {
				return pages[0];
			} else {
				throw new Error('Not Found');
			}
		});
}

class Page extends Component {
	state = {
		page: {}
	};

	static async getInitialProps({ req, res }) {
		const { pageSlug } = req.params;
		console.log(pageSlug);
		const post = {
			title: {
				rendered: 'Post Title'
			},
			content: {
				rendered: 'Post Content'
			}
		};

		return {
			//page,
			pageSlug,
			post
		};
	}

	componentDidMount = async () => {
		if (this.props.pageSlug) {
			const { pageSlug } = this.props;
			try {
				const page = await getPage(pageSlug);
				const { wpStylesLoaderUrl } = page;

				const cssId = 'caldera-wp-css';
				if (null !== document.getElementById(cssId)) {
					document.getElementById(cssId).remove();
				}
				//https://www.filamentgroup.com/lab/async-css.html#async-css-loading-approaches
				// make a stylesheet link
				const wpCss = document.createElement('link');
				wpCss.rel = 'stylesheet';
				wpCss.href = wpStylesLoaderUrl;
				wpCss.id = cssId;
				// insert it at the end of the head in a legacy-friendly manner
				document.head.insertBefore(
					wpCss,
					document.head.childNodes[
						document.head.childNodes.length - 1
					].nextSibling
				);
				this.setState({ page });
			} catch (e) {
				console.log(e);
			}
		}
	};

	render() {
		const { page } = this.state;
		if (!page || !page.id) {
			return <div>Loading</div>;
		}
		return (
			<section className={'content-area'} id={'primary'}>
				<main id={'main'} className={'site-main'}>
					<div>1</div>
				</main>
			</section>
		);
	}
}

export default Page;
