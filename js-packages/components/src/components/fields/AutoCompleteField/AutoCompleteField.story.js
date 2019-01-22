import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoCompleteField } from './AutoCompleteField';

const onChange = newValue => {
	console.log(newValue);
};
const onBlur = event => {};

const STORY_NAME_AUTOCOMPLETE = 'AutoCompleteField';
storiesOf(STORY_NAME_AUTOCOMPLETE, module).add(
	'With no value selected and  placeholder',
	() => (
		<AutoCompleteField
			label={'Select A Hat'}
			onChange={onChange}
			description={'selection of hats'}
			fieldId={'selection-hats'}
			placeholder={'---'}
			required={true}
			options={[{ value: 1, label: 'One' }, { value: 2, label: 'Two' }]}
		/>
	)
);
storiesOf(STORY_NAME_AUTOCOMPLETE, module).add(
	'With no value selected and no placeholder',
	() => (
		<AutoCompleteField
			label={'Select A Hat'}
			onChange={onChange}
			description={'selection of hats'}
			fieldId={'selection-hats'}
			required={true}
			options={[{ value: 1, label: 'One' }, { value: 2, label: 'Two' }]}
		/>
	)
);
storiesOf(STORY_NAME_AUTOCOMPLETE, module).add('With value selected', () => (
	<AutoCompleteField
		label={'Select A Hat'}
		onChange={onChange}
		description={'selection of hats'}
		fieldId={'selection-hats'}
		required={true}
		value={2}
		options={[{ value: 1, label: 'One' }, { value: 2, label: 'Two' }]}
	/>
));
