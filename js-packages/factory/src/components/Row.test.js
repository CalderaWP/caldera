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

import {Row} from './Row';

describe('Row component', () => {
	let onChange;
	let onBlur;
	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn()
	});
	it('Creates a 2 column  row', () => {

		const columns = [
			{
				fields:[
					textField,
					checkboxField,
				],
				width: '1/2',
				columnId: 1,
			},
			{
				fields:[
					checkboxField,
					emailField,
				],
				width: '1/2',
				columnId: 2,

			}
		];
		const component = renderer.create(
			<Row
				rowId={'twoColumns'}
				columns={columns} onChange={onChange} onBlur={onBlur}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});



});
