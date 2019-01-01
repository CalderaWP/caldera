import React from 'react';
import {CalderaForm,formClientFactory} from "@caldera-labs/forms";

const apiRootUri = 'https://caldera.lndo.site/wp-json/caldera-api';
const formId = 'contact-form';


const fieldValues= {
	firstName: '',
	email: '',
};

const emailField = {
	fieldType: 'email',
	html5type: 'email',
	default: 'josh@calderawp.com',
	label: 'Email Field Label',
	fieldId: 'email',
	description: 'Email field description',
	required: true,
	attributes: {
		multiple: false
	}
};

const textField = {
	fieldType: 'text',
	value: 'f',
	label: 'firstName',
	fieldId: 'firstName',
	description: 'Your first name',
	required: true
};



const form = {
	id: formId,
	fieldValues
};
const client = formClientFactory(form,apiRootUri);
const formRowOne = {
	rowId: 'r1',
	columns: [
		{
			fields: [emailField],
			width: '1/2',
			columnId: '1a'
		},
		{
			fields: [textField],
			width: '1/4',
			columnId: '1b'
		}
	]
};

const formRows = [formRowOne];

export const ContactForm = (props) => {

	return <CalderaForm
		formRows={formRows}
		initialValues={fieldValues}
		onSubmit={client.submitForm}
		onChange={(values) => {
			console.log(values);
				client.setFieldValues(values);
			}

		}
	/>
}
