import React from 'react';
import { storiesOf } from '@storybook/react';
import { Processor } from './Processor';
import { Processors } from './Processors';
import { HorizontalForm } from './HorizontalForm';
import {processorsCollection} from './processors.fixtures';
import {
	checkboxFieldset,
	selectField,
	checkboxField,
	numberField,
	textField,
	emailField,
	radioField
} from '@calderawp/factory';
storiesOf('Processors', module).add('The processor', () => (
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
		type={'mailchimp'}
		label={'Main Segment'}
		onChange={values => console.log(values)}
		onClose={values => console.log(values)}
		onRemove={values => console.log(values)}
	/>
));

storiesOf('Processors', module).add('The processors list', () => (
	<Processors
		processors={processorsCollection}
		onChange={values => console.log(values)}
		onClose={values => console.log(values)}
		onRemove={values => console.log(values)}
		formFields={[]}
		form={ {id: 'Name'}}
	/>
));


storiesOf('HorizontalForm', module).add('Works with a bunch of fields', () => (
	<HorizontalForm
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
		onBlur={values => console.log(values)}
		onClose={values => console.log(values)}
	/>
));

