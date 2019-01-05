import {StandardPage} from './components/StandardPage';



import React, {Component, Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import AppBody from './components/AppBody';
const axios = require( 'axios' );
const https = require( 'https' );

/**
 * @return {Promise}
 * @constructor
 */
async function getForms() {
	const instance = axios.create({
		httpsAgent: new https.Agent({
			rejectUnauthorized: false
		})
	});
	return instance.get('https://caldera.lndo.site/wp-json/caldera-api/v1/forms')
		.then( forms => {
			return forms.data;
		})
}



/**
 *
 * @param req
 * @param res
 * @param match
 * @return {Promise<{users, pageTitle: string}>}
 */
async function adminGetInitialProps( req, res, match ) {
	const forms = await getForms();
	return {
		forms,
		pageTitle: 'The Title Of This Page Is Admin'
	};
}

class Admin extends Component {

	state = {
		activeRoute: 'calderaForms'
	};

	//on server, call api and pass results to props
	static async getInitialProps({ req, res, match }) {
		try {
			const props = await adminGetInitialProps(req, res, match);
			return props;
		} catch (e) {
			console.log(e);
		}
	}

	getFormsFromProps = () => {
		const {
			forms
		} = this.props;
		if( undefined === forms || ! Object.values(forms).length) {
			return false;
		}
		return Object.values(forms);
	}
	render() {
		const {
			pageTitle
		} = this.props;
		const {
			activeRoute
		} = this.state;
		const forms = this.getFormsFromProps();
		return (
			<div>
				<StandardPage
					pageKey={'admin'}
					pageTitle={'Admin Area'}
					onChangeActive={(activeRoute) => this.setState({activeRoute})}
				>
					<NavLink to="/admin">Admin</NavLink>
					{ forms && forms.length  ? (
						<AppBody pageTitle={pageTitle} forms={forms} activeRoute={activeRoute}/>
					): (
						<div>Loading...</div>
					)}
				</StandardPage>

			</div>
		);
	}
}
export default Admin;
