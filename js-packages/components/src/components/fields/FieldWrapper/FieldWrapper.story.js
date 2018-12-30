import React from 'react';
import { storiesOf } from '@storybook/react';
import { FieldWrapper } from './FieldWrapper';

storiesOf('FieldWrapper', module).add('Wraps an input', () => (
	<FieldWrapper
		fieldType={'text'}
	><input /></FieldWrapper>
));
