import React, {Component,Fragment} from 'react';
import {RemotePost}  from '@calderawp/components';

/**
 <RemotePost
 post={post}
 showFullContent={true}
 />
 */


const fetch = require( 'isomorphic-fetch');
async function getPage (pageSlug){
	return fetch('http://localhost:3000/wp-json/wp/v2/pages/?slug=' + pageSlug)
		.then(r => r.json())
		.then(pages => {
			if (pages.length) {
				return pages[0];
			} else {
				throw new Error( 'Not Found' );
			}

		})
}

class Page extends Component {

	state = {
		page: {},
		notFound: false,
	}
	static async getInitialProps({req, res, match, history, location, ...ctx}) {
		const {
			pageSlug
		} = req.params;
		const  post = {
			title: {
				rendered: 'Post Title'
			},
			content: {
				rendered: 'Post Content'
			}

		};
		const page = await getPage(pageSlug);

		return {
			page,
			pageSlug,
			post
		}



	};



	render() {
		const {
			page,
			notFound
		} = this.state;

		if( notFound) {
			return <div>Not Found</div>
		}
		if( ! this.props.page.id) {
			return <div>Loading</div>
		}
		return  <RemotePost
			post={this.props.page}
			showFullContent={true}
		/>;
	}
}


export default Page;
