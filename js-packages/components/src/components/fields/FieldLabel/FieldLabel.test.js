import * as React from 'react';
import renderer from 'react-test-renderer';

import { FieldLabel } from './FieldLabel';

test('Field label', () => {
	const component = renderer.create(
		<FieldLabel
			fieldType={'text'}
			fieldId={'hello'}
			>
			Hi Roy
		</FieldLabel>
			);
	expect(component.toJSON()).toMatchSnapshot();
});
