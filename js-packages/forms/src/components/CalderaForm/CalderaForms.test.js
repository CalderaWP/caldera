import {CalderaForm} from "./CalderaForm";
import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';

import {
	formRows
} from './columns.fixtures'
import{ getValuesFromFormLayout} from './util/getValuesFromFormLayout';

const initialValues = getValuesFromFormLayout(formRows);
describe( 'Caldera Forms', () => {
	let onChange = jest.fn();
	let onBlur = jest.fn();
	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn()
	});

	it( 'Forms', ()=> {
		const component = renderer.create(
			<CalderaForm
				formRows={formRows}
				initialValues={initialValues}
				onBlur={onBlur}
				onChange={onChange}
			/>
		);
		expect( component.toJSON()).toMatchSnapshot();
	})

});

describe( 'Updates field value', () => {
	let onSubmit = jest.fn();
	beforeEach(() => {
		onSubmit = jest.fn();
	});

	it( 'Updates field value when field is changed', ()=> {
		const component = mount(
			<CalderaForm
				formRows={formRows}
				initialValues={initialValues}
				onSubmit={onSubmit}
			/>
		);
		const value = 'changed@email22.com';
		const event = {target: {value}};
		component.find( '#emailFieldId' ).find( 'input').simulate( 'change', event );
		expect( component.find( '#emailFieldId').find( 'input').prop('value') ).toEqual(value);
	});

});
