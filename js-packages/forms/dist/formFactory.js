'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.formFactory = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _clientFactory = require('./components/Http/clientFactory');

var _updateRows = require('./util/updateRows');

var _factory = require('@calderawp/factory');

var _CalderaForm = require('./components/CalderaForm/CalderaForm');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formFactory = exports.formFactory = function formFactory(form, _ref) {
	var apiRootUri = _ref.apiRootUri,
	    initalValues = _ref.initalValues,
	    fieldsHidden = _ref.fieldsHidden,
	    fieldsDisabled = _ref.fieldsDisabled;

	var conditionalState = new _factory.ConditionalState(initalValues || {}, fieldsHidden || [], fieldsDisabled || []);
	var rows = form.rows,
	    conditionals = form.conditionals,
	    fields = form.fields;

	var formRows = rows;
	var client = (0, _clientFactory.formClientFactory)(form, apiRootUri);
	var fieldValues = (0, _factory.collectFieldValues)(Object.values(form.fields));
	var className = form.id + ' caldera-form caldera-form-' + form.id;

	var onChange = function onChange(values) {
		var newState = conditionalState.setState(values);
		if (conditionals) {
			conditionals.forEach(function (conditional) {});
		}
		formRows = (0, _updateRows.updateRows)(newState, rows);
		client.setFieldValues(newState);
	};
	return _react2.default.createElement(_CalderaForm.CalderaForm, {
		className: className,
		formRows: formRows,
		initialValues: conditionalState.getCurrentState(),
		onSubmit: client.submitForm,
		onChange: onChange
	});
};