import fieldFactory  from './fieldFactory';
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

describe( 'fieldFactory', () => {
	let onChange;
	let onBlur;
	beforeEach( () => {
		onChange= jest.fn();
		onBlur= jest.fn()
	});
	it( 'Creates a text field', () => {
		const component = renderer.create(fieldFactory(textField,onChange,onBlur));
		expect(component.toJSON()).toMatchSnapshot();
	});
	it( 'Creates a number field', () => {
		const component = renderer.create(fieldFactory(numberField,onChange,onBlur));
		expect(component.toJSON()).toMatchSnapshot();
	});

	it( 'Creates an email field', () => {
		const component = renderer.create(fieldFactory(emailField,onChange,onBlur));
		expect(component.toJSON()).toMatchSnapshot();
	});

	it( 'Creates an checkbox field field', () => {
		const component = renderer.create(fieldFactory(checkboxField,onChange,onBlur));
		expect(component.toJSON()).toMatchSnapshot();
	});

	it( 'Creates an checkbox field set', () => {
		const component = renderer.create(fieldFactory(checkboxFieldset,onChange,onBlur));
		expect(component.toJSON()).toMatchSnapshot();
	});

	it( 'Creates an select field', () => {
		const component = renderer.create(fieldFactory(selectField,onChange,onBlur));
		expect(component.toJSON()).toMatchSnapshot();
	});

	it( 'Creates an select field identified as dropdown', () => {

		const component = renderer.create(fieldFactory({
			...selectField,
			fieldType:'dropdown'
		}),onChange,onBlur);
		expect(component.toJSON()).toMatchSnapshot();
	});
});
