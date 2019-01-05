import * as React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { EntryActions } from './EntryActions';


const Action = ({
	key,
	onClick
				}) => (
 <button key={key} onClick={onClick} className={'test-action'}>Click</button>
);




describe( 'Form EntryViewer component', ()=> {
	const onClick = jest.fn();
	const actions = [
		React.createElement(Action, {
			key: 'actionOne',
			onClick
		})
	];

	test('Views entries', () => {
		const component = mount(
			<EntryActions formId={'cf1'} actions={actions} entryId={7} />
		);
		expect(component.find('.test-action').length).toBe(1);
	});

})
