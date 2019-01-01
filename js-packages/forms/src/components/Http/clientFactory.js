import FormClient from './FormClient';
import submitForm from './handlers/submitForm';
export const formClientFactory = (form,apiRootUri, type = 'caldera', handlers = {},fetch  = window.fetch) => {

	switch (type) {
		case 'caldera':
		default:
		 	if( ! handlers.hasOwnProperty('submitForm')){
		 		handlers.submitForm = submitForm;
			}
			 return new FormClient(form, {
				 apiRootUri,
				 fetch,
				 ...handlers
			 });
			 break;

	}


};
