import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import {
	checkboxFieldset,
	selectField,
	checkboxField,
	numberField,
	textField,
	radioField,
	emailField
} from '../fields.fixtures';

import { FieldGroup } from './FieldGroup';

describe('FieldGroup component', () => {
	let onChange;
	let onBlur;
	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();
	});

	it('Creates a text field', () => {
		const component = renderer.create(
			<FieldGroup field={textField} onChange={onChange} onBlur={onBlur} />
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
	it('Shows errors', () => {
		const fieldErrors = {
			[textField.fieldId]: 'Fail Cake!'
		};
		const fieldsTouched = {
			[textField.fieldId]: true
		};

		const component = renderer.create(
			<FieldGroup
				field={textField}
				onChange={onChange}
				onBlur={onBlur}
				fieldErrors={fieldErrors}
				fieldsTouch={fieldsTouched}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Creates an select field', () => {
		const component = renderer.create(
			<FieldGroup
				field={selectField}
				onChange={onChange}
				onBlur={onBlur}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Changes calls change handler of radio field', () => {
		const component = mount(
			<FieldGroup
				field={radioField}
				onChange={onChange}
				onBlur={onBlur}
			/>
		);

		component
			.find('input')
			.first()
			.simulate('change');
		expect(onChange.mock.calls.length).toBe(1);
	});
	it('Changes calls change handler of checkbox field', () => {
		const component = mount(
			<FieldGroup
				field={checkboxField}
				onChange={onChange}
				onBlur={onBlur}
			/>
		);

		component.find('input').simulate('change');
		expect(onChange.mock.calls.length).toBe(1);
	});
});
