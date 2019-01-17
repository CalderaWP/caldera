import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Processor} from "./Processor";
import {Processors} from "./Processors";
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';

import {
	checkboxFieldset,
	selectField,
	checkboxField,
	numberField,
	textField,
	emailField,
	radioField
} from '@calderawp/factory';

describe('Processors', () => {
	const processors = [
		{id: 'p1', type: 'Redirect', fields: []},
		{id: 'p2', type: 'Redirect', fields: []},
		{id: 'p3', type: 'Redirect', fields: []},
	];

	const form = {};
	const formFields = {};
	let updateProcessors;
	beforeEach(() => {
		updateProcessors = jest.fn();
	});


	it('Should update active', () => {
		const component = mount(
			<Processors
				processors={processors}
				form={form}
				formFields={formFields}
				updateProcessors={updateProcessors}
			/>
		);
		component.instance().setActive('p2');
		expect(component.state('activeProcessorId')).toEqual('p2');
	});

	it('Can remove a processor', () => {
		let values = {};
		const updateProcessors = (updateValues) => {
			values = updateValues;
		};
		const component = mount(
			<Processors
				processors={processors}
				form={form}
				formFields={formFields}
				updateProcessors={updateProcessors}
			/>
		);
		component.instance().handleRemoveProcessor('p2');

		expect(values.length).toEqual(2);
	});

	it( 'Can update a processor type', () => {
		const processors = [
			{id: 'p1', type: 'Redirect', fields: []},
			{id: 'p2', type: 'Redirect', fields: [],label: 'fLabel'},
		];
		let values = {};
		const updateProcessors = (updateValues) => {
			values = updateValues;
		};

		const component = mount(
			<Processors
				processors={processors}
				form={form}
				formFields={formFields}
				updateProcessors={updateProcessors}
			/>
		);

		component.instance().handleProcessorChange('p2', {
			type: 'strident'
		});
		expect(values.find( p => 'p2' === p.id).label).toEqual('fLabel');
		expect(values.find( p => 'p2' === p.id).type).toEqual('strident');


	});


	it( 'Renders with a list of processors', () => {
		const processors = [{id: 'p1', type: 'Redirect', fields: [checkboxField,selectField]}];
		const component = renderer.create(
			<Processors
				processors={processors}
				form={form}
				formFields={formFields}
				updateProcessors={updateProcessors}
			/>
		);
		expect(component.toJSON()).toMatchSnapshot();
	});


});
