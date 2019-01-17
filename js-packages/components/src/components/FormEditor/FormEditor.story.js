import React, {Component} from 'react';
import { storiesOf } from '@storybook/react';
import { Processor } from './Processor';
import { Processors } from './Processors';
import { HorizontalForm } from './HorizontalForm';
import { FormEditor } from './FormEditor';
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
storiesOf('FormEditor', module).add('The processor', () => (
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

storiesOf('FormEditor', module).add('The processors list', () => (
	<Processors
		processors={processorsCollection}
		onChange={values => console.log(values)}
		onClose={values => console.log(values)}
		onRemove={values => console.log(values)}
		formFields={[]}
		form={ {id: 'Name'}}
	/>
));

const form = {
	id: 'a form',
	processors: processorsCollection,
};

const processorTypes = [
	{
		type: 'apiRequest'
	},
	{
		type: 'redirect'
	}
];

class MockFormApp extends Component {
	state = {
		form: {
			id: 'a-form',
			name: 'Form Name',
			processors: processorsCollection,
		}
	};

	updateForm = (form) => this.setState({form});

	render(){
		const {form} = this.state;
		return(
			<FormEditor
				processorTypes={processorTypes}
				updateForm={this.updateForm}
				form={ form }
			/>
		)
	}
}

storiesOf('FormEditor', module).add('The form editor', () => (
	<MockFormApp/>
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

