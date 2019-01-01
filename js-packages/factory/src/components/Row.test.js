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
	let onChange = jest.fn();
	let onBlur;
	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn()
	});



	const columns = [
		{
			children: <div>Half Column</div>,
			width: '1/2',
			columnId: 1,
		},
		{
			children: <div>Quarter Column</div>,
			width: '1/4',
			columnId: 2,
		},
		{
			children: <div>Quarter Column 2</div>,
			width: '1/4',
			columnId: 3,
		},
	];


	it('Creates columns', () => {

		const component = renderer.create(
			<Row
				rowId={'twoColumns'}
				columns={columns} onChange={onChange} onBlur={onBlur}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});



});
