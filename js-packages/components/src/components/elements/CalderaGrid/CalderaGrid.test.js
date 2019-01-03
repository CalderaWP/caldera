import * as React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { CalderaGrid } from './CalderaGrid';



describe('CalderaGrid', () => {
	const numberField = {
		fieldType: 'number',
		value: 3,
		label: 'Number Field Label',
		fieldId: 'numberFieldId',
		description: 'Number field description',
		required: true,
		attributes: {
			min: 1,
			max: 10
		}
	};

	const textField = {
		fieldType: 'text',
		value: 'roy',
		label: 'First Name',
		fieldId: 'firstName',
		description: 'your first name',
		required: true
	};


	it('A row can have a render prop', () => {
		const _Row = props => <div id={'test2243'} />;

		const component = mount(
			<CalderaGrid
				rows={[

					{
						rowId: 'r45',
						render: _Row
					}
				]}
			/>
		);
		expect(component.find('#test2243').length).toBe(1);
	});
	it('A column can have a render prop', () => {
		const _Field = props => (
			<input id={'test243'} type={'number'} key={808} />
		);

		const component = mount(
			<CalderaGrid
				rows={[
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
			/>
		);
		expect(component.find('#test243').length).toBe(1);
	});

	it('A field can have a render prop', () => {
		const _Field = props => <input id={'test808'} type={'number'} />;

		const field = {
			...textField,
			render: _Field,
			key: 800000
		};
		const component = mount(
			<CalderaGrid
				rows={[
					{
						rowId: 'r1',
						columns: [
							{
								fields: [field, numberField],
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
			/>
		);
		expect(component.find('#test808').length).toBe(1);
		expect(component.find('#test808').prop('type')).toBe('number');
	});

});
