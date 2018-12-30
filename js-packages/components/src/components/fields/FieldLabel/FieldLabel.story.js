import React from 'react';
import { storiesOf } from '@storybook/react';
import { FieldLabel } from './FieldLabel';

storiesOf('FieldLabel', module).add('Is a label', () => (
	<FieldLabel
		fieldType={'text'}
		fieldId={'text-field-test'}
	>Label For Text Field</FieldLabel>
));
