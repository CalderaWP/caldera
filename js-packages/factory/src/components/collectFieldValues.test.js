import {
	selectField,
	numberField,
} from '../fields.fixtures';

import {collectFieldValues} from './collectFieldValues'

describe( 'collects field values', () => {
	const selectValue = 2;
	const numberValue = 2;
	const fields = [
		{...selectField, value:selectValue},
		{...numberField, value:numberValue},
	];

	it( 'works',() => {
		const values = collectFieldValues(fields);
		expect( values[selectField.fieldId]).toEqual(selectValue);
		expect( values[numberField.fieldId]).toEqual(numberValue);
	});
});
