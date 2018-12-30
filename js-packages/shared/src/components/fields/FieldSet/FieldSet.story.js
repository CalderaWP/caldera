import React from 'react';
import { storiesOf } from '@storybook/react';
import { FieldSet } from './FieldSet';

storiesOf('FieldSet', module).add('Wraps an input', () => (
	<FieldSet
		fieldType={'text'}
	><input /></FieldSet>
));
