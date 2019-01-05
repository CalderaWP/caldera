import { PageBody } from './PageBody';
import { ContactForm } from '../forms/ContactForm';
import React from 'react';
import PropTypes from 'prop-types';

export default function AppBody({ activeRoute, forms }) {
	switch (activeRoute) {
		case 'calderaForms':
			return (
				<PageBody pageKey={activeRoute}>
					<ContactForm
						form={
							forms.hasOwnProperty('contact-form')
								? forms['contact-form']
								: false
						}
					/>
				</PageBody>
			);case 'calderaPay':
			return (
				<PageBody pageKey={activeRoute}>
					<div>Caldera Pay</div>
				</PageBody>
			);
		case 'home':
		default:
			return <div>Home</div>;
	}
}

AppBody.propTypes = {
	activeRoute: PropTypes.string.isRequired,
	forms: PropTypes.object
};

AppBody.defaultProps = {
	forms: {}
};
