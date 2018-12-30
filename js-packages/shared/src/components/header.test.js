import * as React from 'react';
import { mount } from 'enzyme';
import { Header } from './header';

test('Header renders specified title', () => {
	const wrapper = mount(<Header>React Template</Header>);
	expect(wrapper.find(Header).text()).toEqual('React Template');
});

test('Header renders with the right level', () => {
	const wrapper = mount(<Header headingLevel={'h2'}>React Template</Header>);
	expect(wrapper.prop('headingLevel')).toEqual('h2');
});
