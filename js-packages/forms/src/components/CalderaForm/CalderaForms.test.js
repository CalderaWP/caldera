import {CalderaForm} from "./CalderaForm";
import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';

import {
	formRows
} from './columns.fixtures'

describe( 'Caldera Forms', () => {
	let onChange = jest.fn();
	let onBlur;
	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn()
	});

	it( 'Forms', ()=> {
		const component = renderer.create(
			<CalderaForm
				formRows={formRows}
				initialValues={{}}
				onBlur={onBlur}
				onChange={onChange}
			/>
		);
		expect( component.toJSON()).toMatchSnapshot();
	})

});

