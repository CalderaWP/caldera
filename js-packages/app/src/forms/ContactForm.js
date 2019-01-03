import React from 'react';
import classNames from 'classNames'
import { CalderaForm, formClientFactory } from '@caldera-labs/forms';
import { collectFieldValues } from '@caldera-labs/factory';
const apiRootUri = 'https://caldera.lndo.site/wp-json/caldera-api';
const formId = 'contact-form';

export const ContactForm = props => {
	const _className = 'caldera-forms-form-contact-form';
	const { form } = props;
	if (!form) {
		return <div className={classNames( _className, 'caldera-form-loading') }>Spinner</div>;
	}
	const formRows = form.rows;

	//@TODO Move this to an effect or ref
	const client = formClientFactory(form, apiRootUri);
	const fieldValues = collectFieldValues(Object.values(form.fields));

	return (
		<CalderaForm
			className={_className}
			formRows={formRows}
			initialValues={fieldValues}
			onSubmit={client.submitForm}
			onChange={values => {
				client.setFieldValues(values);
			}}
		/>
	);
};
