import * as React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { TextField } from './TextField';

describe('TextField ', () => {
	let onChange;
	let onBlur;

	beforeEach( () => {
		onChange= jest.fn();
		onBlur= jest.fn()
	});

	it( 'matches snapshot with all props', () =>  {
		const component = renderer.create(<TextField
			label={'Hi Roy'}
			description={'Say Hi'}
			placeholder={'Hello'}
			html5type={'text'}
			value={'Roy'}
			onChange={onChange}
			onBlur={onBlur}
		/>);
		expect(component.toJSON()).toMatchSnapshot();
	});

	it( 'Uses text when html5type is not valid', () =>  {
		const component = mount(<TextField
			label={'Hi Roy'}
			description={'Say Hi'}
			placeholder={'Hello'}
			html5type={'unreal'}
			value={'Roy'}
			onChange={onChange}
			onBlur={onBlur}
		/>);

		expect( component.find( 'input').prop( 'type') ).toEqual( 'text' );
	});
});
