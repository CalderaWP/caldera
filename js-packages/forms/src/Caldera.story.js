import React, {Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import {formRowOne} from './components/CalderaForm/columns.fixtures';
import {Caldera} from './Caldera'
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


storiesOf('Caldera', module).add('Forms', () => (
	<Caldera form={form} apiRootUrl={'https://localhost'} initalValues={initialValues}/>
));
