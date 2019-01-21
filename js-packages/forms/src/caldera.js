import React from 'react';
import {formClientFactory} from './components/Http/clientFactory'
import {updateRows} from './util/updateRows';
import { ConditionalState,collectFieldValues,applyRuleToState } from '@calderawp/factory';
import {CalderaForm} from './components/CalderaForm/CalderaForm';
export const Caldera = ({
	form,
	apiRootUri,
	initalValues,
	fieldsHidden,
	fieldsDisabled
							}) => {



	if( ! initalValues ){
		initalValues = {};
	}
	const {rows,conditionals,fields} = form;
	fields.forEach( field => {
		if( ! initalValues.hasOwnProperty(field.fieldId)){
			initalValues[field.fieldId] = null;
		}
	});

	let formRows = {...rows};
	const client = formClientFactory(form, apiRootUri);

	let conditionalState = new ConditionalState(
		initalValues,
		fieldsHidden || [],
		fieldsDisabled || []
	);
	formRows = updateRows(conditionalState,rows);


	const className = `${form.id} caldera-form caldera-form-${form.id}`;


	const onChange = (values) => {
		const newState = conditionalState.setState(values);
		if( conditionals ){
			conditionals.forEach(conditionalRule=> {
				applyRuleToState(conditionalRule,conditionalState)
			});
		}
		formRows = updateRows(conditionalState,rows);
		client.setFieldValues(conditionalState.getCurrentState());
	};
	return (
		<CalderaForm
			className={className}
			formRows={formRows}
			initialValues={conditionalState.getCurrentState()}
			onSubmit={client.submitForm}
			onChange={onChange}
		/>
	);
}
