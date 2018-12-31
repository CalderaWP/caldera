import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import {
	checkboxFieldset,
	selectField,
	checkboxField,
	numberField,
	textField,
	emailField
} from '../fields.fixtures';
import fieldFactory  from '../factories/fieldFactory';

import {FieldGroup} from './FieldGroup';

describe( 'FieldGroup component', () => {
	let onChange;
	let onBlur;
	beforeEach( () => {
		onChange= jest.fn();
		onBlur= jest.fn()
	});
	it.only( 'Creates a text field', () => {
		const component = renderer.create(
			<FieldGroup
				{...textField} onChange={onChange} onBlur={onBlur}
		/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
	it( 'Creates a number field', () => {
		const component = renderer.create(
			<FieldGroup
				{...numberField} onChange={onChange} onBlur={onBlur}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it( 'Creates an email field', () => {
		const component = renderer.create(
			<FieldGroup
				{...emailField} onChange={onChange} onBlur={onBlur}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it( 'Creates an checkbox field field', () => {
		const component = renderer.create(
			<FieldGroup
				{...checkboxField} onChange={onChange} onBlur={onBlur}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it( 'Creates an checkbox field set', () => {
		const component = renderer.create(
			<FieldGroup
				{...checkboxFieldset} onChange={onChange} onBlur={onBlur}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it( 'Creates an select field', () => {
		const component = renderer.create(
			<FieldGroup
				{...selectField} onChange={onChange} onBlur={onBlur}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it( 'Creates an select field identified as dropdown', () => {
		const component = renderer.create(
			<FieldGroup
				{...{
					...selectField,
					fieldType:'dropdown'
				}} onChange={onChange} onBlur={onBlur}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
});
