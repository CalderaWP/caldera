import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import {
	checkboxFieldset,
	selectField,
	checkboxField,
	numberField,
	textField,
	emailField
} from '../fields.fixtures';

import {Fields} from './Fields';

describe('Fields component', () => {
	let onChange;
	let onBlur;
	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn()
	});
	it('Creates a text and checkbox field field', () => {
		const fields = [
			textField,
			checkboxField
		]
		const component = renderer.create(
			<Fields
				fields={fields} onChange={onChange} onBlur={onBlur}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Creates all five fields', () => {
		const fields = [
			checkboxFieldset,
			selectField,
			checkboxField,
			numberField,
			textField,
			emailField
		]
		const component = renderer.create(
			<Fields
				fields={fields} onChange={onChange} onBlur={onBlur}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

});
