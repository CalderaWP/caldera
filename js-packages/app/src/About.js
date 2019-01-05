import React, {Component} from 'react';
import {StandardPage} from './components/StandardPage';
//const axios = require('axios');

class About extends Component {
	static async getInitialProps({req, res, match, history, location, ...ctx}) {
		return {
			pageTitle: 'About Page'
		}
	}


	render() {
		return (
			<StandardPage pageTitle={'About'}>
				Words In Main Body
			</StandardPage>
		);
	}
}

export default About;
