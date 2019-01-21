import React, {Fragment} from 'react';
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

import renderer from 'react-test-renderer';
import { mount } from 'enzyme';


const formRows = [formRowOne];
const conditionals = [
	{
		type: 'hide',
		rule: (fieldValues) => {
			return fieldValues.emailFieldId === 'hide';
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

describe('formFactory - conditional logic', () => {
	it( 'Renders fields ', () =>{
		const component = mount(	<Fragment>{formFactory(form,{apiRootUri:'http://localhost',initialValues})}</Fragment>);
		expect( component.find( 'input' ).length ).toBe(2);
	});
});
