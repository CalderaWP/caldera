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

import {Rows} from './Rows';
import {Row} from "./Row";

describe('Row component', () => {
	let onChange;
	let onBlur;
	beforeEach(() => {
		onChange = jest.fn();
		onBlur = jest.fn()
	});
	it('Creates with two rows', () => {

		const row1 = {
			rowId: 'r1',
			onChange,
			onBlur,
			columns: [
				{
					fields: [
						textField,
						checkboxField,
					],
					width: '1/2'
				},
				{
					fields: [
						checkboxFieldset,
					],
					width: '1/2'
				}
			]
		};

		const row2 = {
			rowId: 'r2',
			onChange,
			onBlur,
			columns: [
				{
					fields: [
						selectField,
					],
					width: '1/3'
				},
				{
					fields: [
						emailField,
					],
					width: '1/3'
				},
				{
					fields: [
						checkboxField,
					],
					width: '1/3'
				}
			]
		};



		const component = renderer.create(
			<Rows
				rows={[row1,row2]} onChange={onChange} onBlur={onBlur}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});


});
