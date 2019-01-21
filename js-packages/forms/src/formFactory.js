import React,{useState} from 'react';
import {formClientFactory} from './components/Http/clientFactory'
import {updateRows} from './util/updateRows';
import { ConditionalState,collectFieldValues,applyRuleToState } from '@calderawp/factory';
import {CalderaForm} from './components/CalderaForm/CalderaForm';
export const formFactory = (form,{
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
	const client = formClientFactory(form, apiRootUri);

	let conditionalState = new ConditionalState(
		initalValues,
		fieldsHidden || [],
		fieldsDisabled || []
	);
	const [formRows,setFormRows] = useState(updateRows(conditionalState,rows,fields));

	const className = `${form.id} caldera-form caldera-form-${form.id}`;


	const onChange = (values) => {
		const newState = conditionalState.setState(values);
		if( conditionals ){
			conditionals.forEach(conditionalRule=> {
				applyRuleToState(conditionalRule,conditionalState)
			});
		}
		setFormRows(updateRows(conditionalState,rows,fields));
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
