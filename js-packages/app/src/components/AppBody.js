import { PageBody } from './PageBody';
import { ContactForm } from '../forms/ContactForm';
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

//import {FormEntryViewer} from "@calderawp/components";

const ListOfForms = ( {forms} ) => (
	<Fragment>
		<h2>List Of Forms</h2>
		<ul>{forms.map( form => {
			return <li key={form.id}>{form.id}</li>
		})}</ul>
	</Fragment>
);
const findFormById = (formId, forms ) => {
	return forms.find(form => formId === form.id);
};



export default function AppBody({ activeRoute, forms, getEntries }) {
	switch (activeRoute) {
		case 'calderaForms':
			const form = findFormById('contact-form', forms)
				? findFormById('contact-form', forms)
				: false;
			const entries = getEntries('contact-form',1);
			return (
				<PageBody pageKey={activeRoute}>
					<ListOfForms forms={forms}/>
					<ContactForm
						form={form}
					/>
				</PageBody>
			);
		case 'calderaSocial':
			return (
				<PageBody pageKey={activeRoute}>
					<div>Caldera Social</div>
				</PageBody>
			);
			case 'calderaPay':
			return (
				<PageBody pageKey={activeRoute}>
					<div>Caldera Pay</div>
				</PageBody>
			);
		case 'home':
		default:
			return <div>Admin Landing</div>;
	}
}

AppBody.propTypes = {
	activeRoute: PropTypes.string.isRequired,
	forms: PropTypes.object
};

AppBody.defaultProps = {
	forms: {}
};
