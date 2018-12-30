import React from 'react';
import { storiesOf } from '@storybook/react';
import { InputField } from './InputField';

const onChange = (event) => {

};
const onBlur = (event) => {

};
storiesOf('InputField', module).add('With no value', () => (
	<InputField
		label={'Hi Roy'}
		html5type={'text'}
		onChange={onChange}
		onBlur={onBlur}
	/>
));
