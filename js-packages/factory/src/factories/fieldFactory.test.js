import fieldFactory  from './fieldFactory';
import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

describe( 'fieldFactory', () => {
	let onChange;
	let onBlur;
	beforeEach( () => {
		onChange= jest.fn();
		onBlur= jest.fn()
	});
	it( 'Creates a text field', () => {
		const field = {
			fieldType: 'text',
			value: 'roy',
			label: 'First Name',
			fieldId: 'firstName',
			description: 'your first name',
			required: true
		};
		const component = renderer.create(fieldFactory(field));
		expect(component.toJSON()).toMatchSnapshot();
	});
	it( 'Creates a number field', () => {
		const field = {
			fieldType: 'number',
			value: 3,
			label: 'Number Field Label',
			fieldId: 'numberFieldId',
			description: 'Number field description',
			required: true,
			attributes: {
				min: 1,
				max: 10
			}
		};
		const component = renderer.create(fieldFactory(field));
		expect(component.toJSON()).toMatchSnapshot();
	});

	it( 'Creates an email field', () => {
		const field = {
			fieldType: 'email',
			value: 'emai@email.com',
			label: 'Email Field Label',
			fieldId: 'emailFieldLabel',
			description: 'Email field description',
			required: true,
			attributes: {
				multiple: true,
			}
		};
		const component = renderer.create(fieldFactory(field));
		expect(component.toJSON()).toMatchSnapshot();
	});

	it( 'Creates an checkbox field field', () => {
		const field = {
			fieldType: 'checkbox',
			label: 'Checkbox Labe',
			fieldId: 'checkboxFieldLabel',
			description: 'Checkbox field description',
			required: true,
			attributes: {
				checked: true,
			}
		};
		const component = renderer.create(fieldFactory(field));
		expect(component.toJSON()).toMatchSnapshot();
	});
	it( 'Creates an checkbox field set', () => {
		const field = {
			fieldType: 'checkboxes',
			label: 'Checkbox Field Set Label',
			fieldId: 'checkboxFieldSetLabel',
			description: 'Checkbox field set description',
			required: true,
			options: [
				{
					value: 1,
					label: 'One',
					id: 'opt-1'
				},
				{
					value: 2,
					label: 'Two',
					id: 'opt-2',
					description: 'The Second Option',
					attributes: {
						checked: true,
					},
				},
				{
					value: 3,
					label: 'Three',
					id: 'opt-3'
				}
			],


		};
		const component = renderer.create(fieldFactory(field));
		expect(component.toJSON()).toMatchSnapshot();
	});

	it( 'Creates an select field', () => {
		const field = {
			fieldType: 'select',
			value: 1,
			label: 'Select Field Label',
			fieldId: 'selectFieldId',
			description: 'Select field description',
			required: true,
			attributes: {
				multiple: false,
			},
			options : [
				{ value: 0, label: 'Zero' },
				{ value: 1, label: 'One' },
				{ value: 2, label: 'Two' },
			]
		};
		const component = renderer.create(fieldFactory(field));
		expect(component.toJSON()).toMatchSnapshot();
	});
});
