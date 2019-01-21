import React, {Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import {formRowOne} from './components/CalderaForm/columns.fixtures';
import {formFactory} from './formFactory'
import { getValuesFromFormLayout } from './components/CalderaForm/util/getValuesFromFormLayout';
import {
	checkboxFieldset,
	selectField,
	checkboxField,
	numberField,
	textField,
	emailField,
	radioField
} from './components/CalderaForm/fields.fixtures';
const formRows = [formRowOne];
const conditionals = [
	{
		type: 'hide',
		rule: (fieldValues) => {

			return true;
		},
		fields: [
			textField.fieldId
		]
	}
];


const form = {
	id: 'conditionalTest',
	name: 'Conditionals Test',
	rows: formRows,
	fields: [
		emailField,
		textField
	],
	conditionals

};
const initialValues = getValuesFromFormLayout(formRows);

const TheForm = () => (
	<Fragment>{formFactory(form,{apiRootUri:'http://localhost',initialValues})}</Fragment>
)
storiesOf('formFactory', module).add('Forms', () => (
	<TheForm/>
));
