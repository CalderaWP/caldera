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
		page: {}
	}
	static async getInitialProps({req, res, match, history, location, ...ctx}) {
		const pageSlug = match.path;
		let pageId = 22;//home


		const  post = {
			title: {
				rendered: 'Post Title'
			},
			content: {
				rendered: 'Post Content'
			}

		};
		return {
			pageId,
			post
		}



	};

	componentDidMount = ()  => {
		const {
			pageId
		} = this.props;
		fetch( 'http://localhost:3000/wp-json/wp/v2/pages/' + pageId )
			.then(r => r.json() )
			.then( page => this.setState({page}));


	}





	render() {
		const {
			page
		} = this.state;
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
