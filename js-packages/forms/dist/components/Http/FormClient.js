'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = FormClient;

var _decoratorFactory = require('./decoratorFactory/decoratorFactory');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 *
 * @param form
 * @param {{submitForm:function({object},{string},{fetch})}} options
 * @return {Proxy}
 * @constructor
 */
function FormClient(form, options) {
	var _this = this;

	this.fieldValues = form.fieldValues;
	var apiRootUri = options.apiRootUri,
	    fetch = options.fetch;


	this.eventOpts = function () {
		return {
			apiRootUri: apiRootUri,
			formId: form.id
		};
	};

	this.setFieldValues = function (fieldValues) {
		_this.fieldValues = fieldValues;
	};

	this.getFieldValues = function () {
		return _this.fieldValues;
	};

	/**
  * Create arguments to provide to each event
  * @return {*[]}
  */
	this.createEventBag = function () {
		return [_this.fieldValues, _this.eventOpts(), fetch];
	};

	/**
  * Handle form submission
  *
  * @return {*}
  */
	this.submitForm = function () {
		if ('function' === typeof options.submitForm) {
			return options.submitForm.apply(options, _toConsumableArray(_this.createEventBag()));
		}
	};

	/**
  * @return {{
  *     submitForm:function({object})}}
  * }}
  */
	return (0, _decoratorFactory.decorateObjectLiteralWithMethods)(this.fieldValues, {
		setFieldValues: this.setFieldValues,
		getFieldValues: this.getFieldValues,
		submitForm: this.submitForm
	});
}