import { CalderaForm } from './CalderaForm';
import React, {Fragment} from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { formRows,formRowOne,checkboxField } from './columns.fixtures';
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

	it( 'A row can have a render prop', () => {
		const _Row = (props) => <div id={'test2243'}/>;

		const component = mount(
			<CalderaForm
				formRows={[
					formRowOne,
					{
						rowId: 'r45',
						render:  _Row
					}
				]}
				initialValues={initialValues}
				onBlur={onBlur}
				onChange={onChange}
			/>
		);
		expect(component.find('#test2243').length).toBe(1);
	});
	it( 'A column can have a render prop', () => {
		const _Field = (props) => <input id={'test243'} type={'number'} key={808}/>;

		const component = mount(
			<CalderaForm
				formRows={[
					{
						rowId: 'r1',
						columns: [
							{
								render: _Field,
								width: '1/2',
								columnId: '1aaaaa'
							},
							{
								fields: [textField],
								width: '1/4',
								columnId: '1b'
							}
						]
					}
				]}
				initialValues={initialValues}
				onBlur={onBlur}
				onChange={onChange}
			/>
		);
		expect(component.find('#test243').length).toBe(1);
	});

	it( 'A field can have a render prop', () => {
		const _Field = (props) => <input id={'test808'} type={'number'} />;

		const field = {
			...checkboxField,
			render: _Field,
			key:800000
		};
		const component = mount(
			<CalderaForm
				formRows={[
					{
						rowId: 'r1',
						columns: [
							{
								fields: [
									field,
									checkboxField
								],
								width: '1/2',
								columnId: '1aaaaa'
							},
							{
								fields: [textField],
								width: '1/4',
								columnId: '1b'
							}
						]
					}
				]}
				initialValues={initialValues}
				onBlur={onBlur}
				onChange={onChange}
			/>
		);
		expect(component.find('#test808').length).toBe(1);
		expect(component.find('#test808').prop('type')).toBe('number');
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

