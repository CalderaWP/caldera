import { decorateObjectLiteralWithMethods } from './decoratorFactory/decoratorFactory';

/**
 *
 * @param form
 * @param {{submitForm:function({object},{string},{fetch})}} options
 * @return {Proxy}
 * @constructor
 */
export default function FormClient(form, options) {
	const { fieldValues } = form;
	let {
		apiRootUri,
		fetch
	} = options;

	this.eventOpts = () => {
		return {
			apiRootUri,
			formId: form.id
		}
	};


	/**
	 * Create arguments to provide to each event
	 * @return {*[]}
	 */
	this.createEventBag = () => {
		return [
			fieldValues,
			this.eventOpts(),
			fetch
		]
	};

	/**
	 * Handle form submission
	 *
	 * @return {*}
	 */
	this.submitForm = () => {
		if ('function' === typeof options.submitForm) {
			return options.submitForm(...this.createEventBag());
		}
	};

	/**
	 * @return {{
	 *     submitForm:function({object})}}
	 * }}
	 */
	return decorateObjectLiteralWithMethods(fieldValues, {
		submitForm: this.submitForm
	});
}

