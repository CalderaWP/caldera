import renderer from 'react-test-renderer';
import React from 'react';
import AppBody from './AppBody';
describe( 'AppBody', () => {
	it( 'Matches snapshot' , ()=> {
		const component = renderer.create(
			<AppBody
				route={'about'}
				forms={{}}
			>
				<div>a</div>
			</AppBody>
		);
		expect( component.toJSON() ).toMatchSnapshot();
	});
});
