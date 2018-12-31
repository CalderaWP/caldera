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

	const columnWithEmailField = {
		fields:[
			emailField,
		],
		width: '1/2',
		columnId: 22,

	};

	const columnWithEmailFieldNoValue = {
		fields:[
			{...emailField,value: ''},
		],
		width: '1/2',
		columnId: 22,

	};

	const columnWithSelectField = {
		fields:[
			{...selectField, value: 2},
		],
		width: '1/2',
		columnId: 222,

	};

	const columns = [
		{
			fields:[
				textField,
				checkboxField,
			],
			width: '1/2',
			columnId: 1,
		},
		columnWithEmailField
	];


	it('Creates a 2 column  row', () => {

		const component = renderer.create(
			<Row
				rowId={'twoColumns'}
				columns={columns} onChange={onChange} onBlur={onBlur}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Calls the change handler correctly', () => {


		const component = mount(
			<Row
				rowId={'twoColumns'}
				columns={[columnWithEmailFieldNoValue]} onChange={onChange} onBlur={onBlur}
			/>
		);
		//emailField
		const expectedValue = 'roy@hiroy.club';
		const event = {target: {value: expectedValue}};
		component.find( 'input').simulate( 'change',event);
		expect(onChange.mock.calls[0][0]).toEqual({[emailField.fieldId]:expectedValue});



	});


});
