import React, {Component} from 'react';
import {StandardPage} from "./components/StandardPage";
import { Link } from 'react-router-dom';


class Login extends Component {
	static async getInitialProps({req, res, match, history, location, ...ctx}) {

		return {

		}
	}


	render() {

		return(
			<StandardPage pageTitle={'Login'}

			>
				<Link to="/about">About -></Link>
			</StandardPage>
		)
	}
}

export default Login;
