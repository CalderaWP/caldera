import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import {PageBody} from './PageBody';
describe( 'PageBody', () => {
	it( 'Matches snapshot' , ()=> {
		const component = renderer.create(
			<PageBody
				pageKey={'about'}
			>
				<div>a</div>
			</PageBody>
		);
		expect( component.toJSON() ).toMatchSnapshot();
	});
});
