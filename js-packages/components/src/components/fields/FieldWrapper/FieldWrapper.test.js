import * as React from 'react';
import renderer from 'react-test-renderer';

import { FieldWrapper } from './FieldWrapper';

test('Field label', () => {
	const component = renderer.create(
		<FieldWrapper
			fieldType={'text'}
			>
			<input />
		</FieldWrapper>
			);
	expect(component.toJSON()).toMatchSnapshot();
});
