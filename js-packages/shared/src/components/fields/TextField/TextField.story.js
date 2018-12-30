import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextField } from './TextField';

const onChange = (event) => {

};
const onBlur = (event) => {

};
storiesOf('TextField', module).add('With no value', () => (
	<TextField
		label={'Hi Roy'}
		html5type={'text'}
		onChange={onChange}
		onBlur={onBlur}
	/>
));
