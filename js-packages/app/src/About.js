//import {StandardPage} from './components/StandardPage';

import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
const fetch = require('isomorphic-fetch');

/**
 * Async function returning a Promise that returns an array of users from a remote API
 * @return {Promise}
 * @constructor
 */
async function getUsers() {
	return fetch('/users')
		.then(r => r.json())
		.then(users => {
			return users;
		});
}

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
const AboutPageContent = ({ pageTitle, users }) => (
	<Fragment>
		<h1>{pageTitle}</h1>
		<h2>List Of Users</h2>
		<ul>
			{users.map(user => {
				return <li key={user.id}>{user.name}</li>;
			})}
		</ul>
	</Fragment>
);

/**
 * Get the about page initial props
 *
 * Move to its own file, test in isolation, reuse with express, etc.
 *
 * @param req
 * @param res
 * @param match
 * @return {Promise<{users, pageTitle: string}>}
 */
async function aboutGetInitialProps(req, res, match) {
	const users = await getUsers();
	return {
		users,
		pageTitle: 'Caldera Admin Page'
	};
}

class About extends Component {
	//on server, call api and pass results to props
	static async getInitialProps({ req, res, match }) {
		try {
			const props = await aboutGetInitialProps(req, res, match);
			return props;
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		const { users, pageTitle } = this.props;
		return (
			<div>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/admin">Admin</NavLink>
				{Array.isArray(users) ? (
					<AboutPageContent pageTitle={pageTitle} users={users} />
				) : (
					<div>Loading...</div>
				)}
			</div>
		);
	}
}
export default About;
