import React, {Component,Fragment} from 'react';
import {RemotePost} from '@calderawp/components';

/**
 <RemotePost
 post={post}
 showFullContent={true}
 />
 */


const fetch = require( 'isomorphic-fetch');


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
		return {
			pageSlug,
			post
		}



	};

	componentDidMount = ()  => {
		let {
			pageSlug
		} = this.props;
		if (!pageSlug) {
			pageSlug = 'caldera';
		}
		fetch('http://localhost:3000/wp-json/wp/v2/pages/?slug=' + pageSlug)
			.then(r => r.json())
			.then(pages => {
				if (pages.length) {
					this.setState({page: pages[0], notFound: false})
				} else {
					this.setState({notFound: true});
				}
			});
	}


	render() {
		const {
			page,
			notFound
		} = this.state;
		if( notFound) {
			return <div>Not Found</div>
		}
		if( ! page.id) {
			return <div>Loading</div>
		}
		return  <RemotePost
			post={page}
			showFullContent={true}
		/>;
	}
}


export default Page;
