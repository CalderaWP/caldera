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

import {Fields} from './Fields';

describe( 'Fields component', () => {
	let onChange;
	let onBlur;
	beforeEach( () => {
		onChange= jest.fn();
		onBlur= jest.fn()
	});
	it.only( 'Creates a text field', () => {
		const component = renderer.create(
			<Fields
				{...textField} onChange={onChange} onBlur={onBlur}
		/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
	it( 'Creates a number field', () => {
		const component = renderer.create(
			<Fields
				{...numberField} onChange={onChange} onBlur={onBlur}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it( 'Creates an email field', () => {
		const component = renderer.create(
			<Fields
				{...emailField} onChange={onChange} onBlur={onBlur}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it( 'Creates an checkbox field field', () => {
		const component = renderer.create(
			<Fields
				{...checkboxField} onChange={onChange} onBlur={onBlur}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it( 'Creates an checkbox field set', () => {
		const component = renderer.create(
			<Fields
				{...checkboxFieldset} onChange={onChange} onBlur={onBlur}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it( 'Creates an select field', () => {
		const component = renderer.create(
			<Fields
				{...selectField} onChange={onChange} onBlur={onBlur}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it( 'Creates an select field identified as dropdown', () => {
		const component = renderer.create(
			<Fields
				{...{
					...selectField,
					fieldType:'dropdown'
				}} onChange={onChange} onBlur={onBlur}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
});
