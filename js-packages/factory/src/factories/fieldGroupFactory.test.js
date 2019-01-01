import { fieldGroupFactory } from './fieldGroupFactory';
import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import {
	checkboxFieldset,
	selectField,
	checkboxField,
	numberField,
	textField,
	emailField,
	radioField
} from '../fields.fixtures';

import { fieldWrapperClassNames } from '@caldera-labs/components';

describe('fieldFactory', () => {
	let onChange;
	let onBlur;
	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();
	});
	it('Creates a text field', () => {
		const component = renderer.create(
			fieldGroupFactory(textField, onChange, onBlur)
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Creates an select field', () => {
		const component = renderer.create(
			fieldGroupFactory(selectField, onChange, onBlur)
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
});

describe('change handlers', () => {
	let onChange;
	let onBlur;
	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();
	});

	it('Changes calls change handler', () => {
		const component = mount(fieldGroupFactory(textField, onChange, onBlur));
		component.find('input').simulate('change');
		expect(onChange.mock.calls.length).toBe(1);
	});
});

describe('Showing errors', () => {
	//fieldErrors, fieldsTouch
	let onChange;
	let onBlur;
	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();
	});
	it('Does not display error class on field wrapper if field has not been touched', () => {
		const errorMessage = 'Fails!';
		const fieldErrors = {
			[textField.fieldId]: errorMessage
		};
		const component = mount(
			fieldGroupFactory(textField, onChange, onBlur, fieldErrors, {})
		);
		expect(
			component.find('.caldera-field-group').hasClass('has-error')
		).toBe(false);
	});
	it('Does not display error class on field wrapper if field has  been touched', () => {
		const errorMessage = 'Fails!';
		const fieldErrors = {
			[textField.fieldId]: errorMessage
		};
		const fieldTouched = {
			[textField.fieldId]: true
		};
		const component = mount(
			fieldGroupFactory(
				textField,
				onChange,
				onBlur,
				fieldErrors,
				fieldTouched
			)
		);
		expect(
			component
				.find('.caldera-field-group')
				.first()
				.hasClass('has-error')
		).toBe(true);
	});

	it('Does not display Message component if field has not been touched', () => {
		const errorMessage = 'Fails!';
		const fieldErrors = {
			[textField.fieldId]: errorMessage
		};
		const fieldTouched = {};
		const component = mount(
			fieldGroupFactory(
				textField,
				onChange,
				onBlur,
				fieldErrors,
				fieldTouched
			)
		);
		expect(component.find('.caldera-components-error').length).toBe(0);
	});

	it('Does display Message component if field has been touched', () => {
		const errorMessage = 'Fails!';
		const fieldErrors = {
			[textField.fieldId]: errorMessage
		};
		const fieldTouched = {
			[textField.fieldId]: true
		};
		const component = mount(
			fieldGroupFactory(
				textField,
				onChange,
				onBlur,
				fieldErrors,
				fieldTouched
			)
		);

		expect(
			component.find('.caldera-components-error').hasClass('has-error')
		).toBe(true);
		expect(component.find('.caldera-components-error').text()).toBe(
			errorMessage
		);
	});

	it('Does not display Message component if field has no errors field has been touched', () => {
		const errorMessage = 'Fails!';
		const fieldErrors = {
			[textField.fieldId]: false
		};
		const fieldTouched = {
			[textField.fieldId]: true
		};
		const component = mount(
			fieldGroupFactory(
				textField,
				onChange,
				onBlur,
				fieldErrors,
				fieldTouched
			)
		);
		expect(component.find('.caldera-components-error').length).toBe(0);
	});
});
