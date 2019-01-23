import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoCompleteField } from './AutoCompleteField';
import { FormTokenField } from '@wordpress/components';
import { withState } from '@wordpress/compose';

const MyFormTokenField = withState( {
	tokens: [],
	suggestions: [ 'Africa', 'America', 'Antarctica', 'Asia', 'Europe', 'Oceania' ],
} )( ( { tokens, suggestions, setState } ) => (
	<FormTokenField
		value={ tokens }
		suggestions={ suggestions }
		onChange={ tokens => setState( { tokens } ) }
		placeholder="Type a continent"
	/>
) );
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
			required={true}
			options={['a', 'b', 'c']}
			value={[]}
		/>
	)
);
storiesOf(STORY_NAME_AUTOCOMPLETE, module).add(
	'With no value selected ',
	() => (
		<AutoCompleteField
			label={'Select A Hat'}
			onChange={onChange}
			description={'selection of hats'}
			fieldId={'selection-hats'}
			required={true}
			options={['a', 'b', 'c']}
			value={['b']}
		/>
	)
);
storiesOf(STORY_NAME_AUTOCOMPLETE, module).add('With two values selects', () => (
	<AutoCompleteField
		label={'Select A Hat'}
		onChange={(change) => console.log(change)}
		description={'selection of hats'}
		fieldId={'selection-hats'}
		required={true}
		value={['One', 'Three']}
		options={['One', 'Two', 'Three']}
	/>
));
