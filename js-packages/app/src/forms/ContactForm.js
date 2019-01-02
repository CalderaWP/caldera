import React from 'react';
import {CalderaForm,formClientFactory} from "@caldera-labs/forms";

const apiRootUri = 'https://caldera.lndo.site/wp-json/caldera-api';
const formId = 'contact-form';

const client = formClientFactory(form,apiRootUri);

export const ContactForm = (props) => {

	const {
		form
	} = props;
	if( ! form ){
		return <div>Spinner</div>
	}
	const formRows = form.rows;


	return <CalderaForm
		formRows={formRows}
		initialValues={fieldValues}
		onSubmit={client.submitForm}
		onChange={(values) => {
			console.log(values);
				client.setFieldValues(values);
			}

		}
	/>
}
