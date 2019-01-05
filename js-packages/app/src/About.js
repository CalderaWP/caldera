import {StandardPage} from './components/StandardPage';



import React, {Component, Fragment} from 'react';
import { NavLink } from 'react-router-dom';


/**
 * About page component
 *
 * Move to its own file, test in isolation!
 *
 * @param pageTitle
 * @param users
 * @return {*}
 * @constructor
 */
const AboutPageContent = ({pageTitle, users} ) => (
	<Fragment>
		<h1>{pageTitle}</h1>

	</Fragment>
);
class About extends Component {

	//on server, call api and pass results to props
	static async getInitialProps({ req, res, match }) {
		return {
			pageTitle: 'About Page'
		}
	}

	render() {
		const {
			pageTitle
		} = this.props;
		return (
			<div>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/admin">Admin</NavLink>
				<AboutPageContent pageTitle={pageTitle} />

			</div>
		);
	}
}
export default About;
