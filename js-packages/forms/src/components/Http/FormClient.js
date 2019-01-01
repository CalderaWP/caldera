import { decorateObjectLiteralWithMethods } from './decoratorFactory';

/**
 *
 * @param form
 * @param {{submitHandler:function({object})}} options
 * @return {Proxy}
 * @constructor
 */
export default function FormClient(form, options) {
	const { fieldValues } = form;
	this.submitForm = () => {
		if ('function' === typeof options.submitHandler) {
			return options.submitHandler(fieldValues);
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
