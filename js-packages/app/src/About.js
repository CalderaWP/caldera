import React, {Component} from 'react';

const axios = require('axios');

class About extends Component {
	static async getInitialProps({req, res, match, history, location, ...ctx}) {
		const {data} = await axios.get('https://api.github.com/users/royboy789');

		return {
			data,
		}
	}


	render() {
		const {data} = this.props;
		const{
			blog,
			name
	} = data;
		return <div>
			<h1>{name}</h1>
			<a href={blog}>{blog}</a>
		</div>;
	}
}

export default About;
