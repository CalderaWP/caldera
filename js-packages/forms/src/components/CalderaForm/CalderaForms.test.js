import { CalderaForm } from './CalderaForm';
import React, {Fragment} from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { formRows,formRowOne } from './columns.fixtures';
import { getValuesFromFormLayout } from './util/getValuesFromFormLayout';
import {emailField, textField} from "./fields.fixtures";

const initialValues = getValuesFromFormLayout(formRows);
describe('Caldera Forms', () => {
	let onChange = jest.fn();
	let onBlur = jest.fn();
	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn();
	});

	it('Forms', () => {
		const component = renderer.create(
			<CalderaForm
				formRows={formRows}
				initialValues={initialValues}
				onBlur={onBlur}
				onChange={onChange}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it( 'A row can be a component', () => {
		const component = mount(
			<CalderaForm
				formRows={[
					formRowOne,
					<p id={'test20'}>Hi Roy</p>
				]}
				initialValues={initialValues}
				onBlur={onBlur}
				onChange={onChange}
			/>
		);
		expect(component.find('#test20').length).toBe(1);
	});


});


describe('Updates field value', () => {
	let onSubmit = jest.fn();
	beforeEach(() => {
		onSubmit = jest.fn();
	});

	it('Updates field value when field is changed', () => {
		const component = mount(
			<CalderaForm
				formRows={formRows}
				initialValues={initialValues}
				onSubmit={onSubmit}
			/>
		);
		const value = 'changed@email22.com';
		const event = { target: { value } };
		component
			.find('#emailFieldId')
			.find('input')
			.simulate('change', event);
		expect(
			component
				.find('#emailFieldId')
				.find('input')
				.prop('value')
		).toEqual(value);
	});

	it( 'Recives values update when any field changes', () => {
		const _onChange = jest.fn();
		const component = mount(
			<CalderaForm
				formRows={formRows}
				initialValues={initialValues}
				onSubmit={onSubmit}
				onChange={_onChange}
			/>
		);
		const value = 'changed@email22.com';
		const event = { target: { value } };
		component
			.find('#emailFieldId')
			.find('input')
			.simulate('change', event);
		expect(
			_onChange.mock.calls.length
		).toEqual(1);

	})
});

