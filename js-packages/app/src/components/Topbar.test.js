import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import {TopBar} from './TopBar';
describe( 'Topbar', () => {
	it( 'Matches snpashot' , ()=> {
		const component = renderer.create(
			<TopBar/>
		);
		expect( component.toJSON() ).toMatchSnapshot();
	});

	it( 'Calls route change handler' , ()=> {
		const onChangeActive = jest.fn();
		const component = shallow(
			<TopBar
				onChangeActive={onChangeActive}
			/>
		);
		component.find( 'a' ).first().simulate('click');
		expect( onChangeActive.mock.calls.length ).toBe(1);
	});
});
