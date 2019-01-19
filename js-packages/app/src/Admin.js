import { StandardPage } from './components/StandardPage';
import React, { Component } from 'react';
import AppBody from './components/AppBody';
const fetch = require('isomorphic-fetch');

/**
 * @return {Promise}
 * @constructor
 */
async function getForms() {
	return fetch('http://localhost:3000/wp-json/caldera-api/v1/forms')
		.then(r => r.json())
		.then(forms => {
			return forms;
		});
}

/**
 * @return {Promise}
 * @constructor
 */
async function getEntries(formId, page) {
	return fetch(
		'http://localhost:3000/wp-json/caldera-api/v1/entries?formId=' + formId
	)
		.then(r => r.json())
		.then(entries => {
			return entries;
		});
}
/**
 *
 * @param req
 * @param res
 * @param match
 * @return {Promise<{users, pageTitle: string}>}
 */
async function adminGetInitialProps(req, res, match) {
	try {
		const forms = await getForms();
		return {
			forms,
			pageTitle: 'Caldera Admin Area'
		};
	} catch (e) {
		return {
			pageTitle: 'An Error Occurred When Loading Forms'
		};
	}
}

class Admin extends Component {
	state = {
		activeRoute: '',
		message: []
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

	onChangeMessage = (message) => this.setState({message});

	getFormsFromProps = () => {
		const { forms } = this.props;
		if (undefined === forms || !Object.values(forms).length) {
			return false;
		}
		return Object.values(forms);
	};

	render() {
		const { pageTitle } = this.props;
		const { activeRoute,message } = this.state;
		const forms = this.getFormsFromProps();
		return (
			<StandardPage
				pageTitle={pageTitle}
				pageKey={'admin'}
				onChangeActive={activeRoute => this.setState({ activeRoute })}
			>
				<AppBody
					activeRoute={activeRoute}
					forms={forms}
					getEntries={getEntries}
				/>

			</StandardPage>
		);
	}
}
export default Admin;
