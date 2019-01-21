import {updateRows} from './updateRows';
import {ConditionalState} from '@calderawp/factory';

describe('updateRows', () => {

	const rows = [
		{
			rowId: 'r1',
			columns :[
				{
					columnId: 'c1',
					fields : [
						{
							fieldId: 'hideField'
						},
						{
							fieldId: 'showField'
						}
					]
				}
			]
		}
	];
	it('should remove a hidden row', () => {
		const state = new ConditionalState( {
			hideField: 'h',
			showField: 's'
		},['hideField']);
		expect( updateRows(state,rows)[0].columns[0].fields.findIndex(f => f.fieldId === 'showField')).toEqual(0);
		expect( updateRows(state,rows)[0].columns[0].fields.findIndex(f => f.fieldId === 'hideField')).toEqual(-1);
	});

	it( 'should replace field ids with fields', () => {
		const field = {
			fieldType: 'input',
			html5Type: 'number',
			fieldId: 'showField',
		};

		const state = new ConditionalState( {
			hideField: 'h',
			showField: 's'
		});

		const rows = [
			{
				rowId: 'r1',
				columns :[
					{
						columnId: 'c1',
						fields : [
							{
								fieldId: 'hideField'
							},
							'showField'

						]
					}
				]
			}
		];
		expect( updateRows(state,rows,[field])[0].columns[0].fields.find(f => f.fieldId === 'showField')).toEqual(field);
	});


	it( 'should remove invalid fields', () => {
		const field = {
			fieldType: 'input',
			html5Type: 'number',
			fieldId: 'showField',
		};

		const state = new ConditionalState( {
			hideField: 'h',
			showField: 's'
		});

		const rows = [
			{
				rowId: 'r1',
				columns :[
					{
						columnId: 'c1',
						fields : [
							{
								fieldId: 'hideField'
							},
							'a'

						]
					}
				]
			}
		];
		expect( updateRows(state,rows,[field])[0].columns[0].fields.length).toEqual(1);
	});
});
