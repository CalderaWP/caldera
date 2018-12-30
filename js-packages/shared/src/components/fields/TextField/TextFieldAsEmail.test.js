import * as React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { TextField } from './TextField';

describe('TextField  as number', () => {
	let onChange;
	let onBlur;

	beforeEach( () => {
		onChange= jest.fn();
		onBlur= jest.fn()
	});

	const attributes = {
		'maxlength':77,
		'multiple': true,
		spellcheck: false
	};

	it( 'Allows min, max and step attributes', () =>  {
		const component = mount(<TextField
			label={'Email addresses'}
			html5type={'email'}
			value={'roy@hiroy.club'}
			onChange={onChange}
			onBlur={onBlur}
			attributes={attributes}
		/>);

		expect( component.find( 'input').prop( 'maxLength') ).toEqual( attributes.maxlength );
		expect( component.find( 'input').prop( 'multiple') ).toEqual( attributes.multiple );
		expect( component.find( 'input').prop( 'value') ).toEqual( 'roy@hiroy.club' );
		expect( component.find( 'input').prop( 'spellCheck') ).toEqual( false );
	});
});
