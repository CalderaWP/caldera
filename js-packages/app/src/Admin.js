import React, {Component} from 'react';
import {StandardPage} from "./components/StandardPage";
import { Link } from 'react-router-dom';
import AppBody from './components/AppBody';

async function getForms() {
	return fetch('/wp-json/caldera-api/v1/forms')
		.then(r => r.json())
		.then(forms => {
			return forms;
		})
		.catch(e => console.log(e))
}

class Admin extends Component {
	state = {
		activeRoute: 'calderaForms'
	}
	static async getInitialProps({req, res, match, history, location, ...ctx}) {
		const forms = await getForms();
		return {
			forms
		}
	}


	render() {
		console.log(this.props);
		const {
			forms,

		} = this.props;
		const {
			activeRoute
		} = this.state;
		return(
			<StandardPage pageTitle={'Admin'}

			>
				<AppBody
					activeRoute={activeRoute}
					forms={forms}
				/>
			</StandardPage>
		)
	}
}

export default Admin;
