import { PageBody } from './PageBody';
import { ContactForm } from '../forms/ContactForm';
import { Forms } from '../features/forms/Forms';
import React from 'react';
import PropTypes from 'prop-types';

export default function AppBody({ route, forms }) {
	switch (route) {
		case 'calderaForms':
			return (
				<PageBody pageKey={route}>
					<ContactForm
						form={
							forms.hasOwnProperty('contact-form')
								? forms['contact-form']
								: false
						}
					/>
				</PageBody>
			);
			break;
		case 'calderaPay':
			return (
				<PageBody pageKey={route}>
					<Forms forms={forms} />
				</PageBody>
			);
			break;
		case 'home':
		default:
			return <div>Home</div>;
			break;
	}
}

AppBody.propTypes = {
	route: PropTypes.string.isRequired,
	forms: PropTypes.object
};

AppBody.defaultProps = {
	forms: {}
};
