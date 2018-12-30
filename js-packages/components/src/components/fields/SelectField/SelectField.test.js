import * as React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import {SelectField} from './SelectField';

describe( 'Select Field component', () => {
	let onChange;
	beforeEach( () => {
		onChange= jest.fn()
	});
	it( 'matches snapshot, not multiple', () => {
		const component = renderer.create(<SelectField
			label={'Select A Hat'}
			description={'selection of hats' }
			fieldId={'selection-hats' }
			required={false}
			multiple={false}
		/>);
		expect(component.toJSON()).toMatchSnapshot();

	});

	it( 'matches snapshot, multiple', () => {
		const component = renderer.create(<SelectField
			label={'Select  Hats'}
			description={'selection of hats' }
			fieldId={'selection-hatses' }
			required={true}
			multiple={true}
		/>);
		expect(component.toJSON()).toMatchSnapshot();

	});

	it( 'Fires on change event', () => {
		const component = mount(<SelectField
			label={'Select A Hat'}
			onChange={onChange}
			description={'selection of hats' }
			fieldId={'selection-hats' }
			required={true}
			multiple={true}
			options={[
				{value:1,label:'One'},
				{value:2,label:'Two'},
			]}
		/>);

		const event = {target: {value: 2}};
		component.find( 'select' ).simulate( 'change', event );
		expect(onChange.mock.calls.length).toBe(1);
		expect(onChange.mock.calls[0][0]).toBe(2);
	});



});
