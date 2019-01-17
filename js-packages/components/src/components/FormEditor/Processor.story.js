import React from 'react';
import { storiesOf } from '@storybook/react';
import { Processor } from './Processor';

import {
	checkboxFieldset,
	selectField,
	checkboxField,
	numberField,
	textField,
	emailField,
	radioField
} from '@calderawp/factory';
storiesOf('Processor', module).add('Works with a bunch of fields', () => (
	<Processor
		fields={[
			checkboxFieldset,
			selectField,
			checkboxField,
			numberField,
			textField,
			emailField,
			radioField
		]}
		onChange={values => console.log(values)}
		onClose={values => console.log(values)}
		onRemove={values => console.log(values)}
	/>
));
