import React, {Component} from 'react';

function getPost() {
	return fetch('https://calderaforms.com/wp-json/wp/v2/pages/132812').then( r => r.json() ).then(r => {return r;} );
}
class Page extends Component {
	static async getInitialProps({req, res, match, history, location, ...ctx}) {
		const post = await getPost();

		console.log(post);
		return {post: {
				title: {
					rendered: 'Post Title'
				},
			}};
	}


	render() {
		return <div>
			{this.props.post.title.rendered}
		</div>;
	}
}

export default Page;
