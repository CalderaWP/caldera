import renderer from 'react-test-renderer';
import React from 'react';
import { App } from './App';

//import "@babel/polyfill";
describe('App component', () => {
	it('Matches snapshot', () => {
		expect(renderer.create(<App />).toJSON()).toMatchSnapshot();
	});
});
