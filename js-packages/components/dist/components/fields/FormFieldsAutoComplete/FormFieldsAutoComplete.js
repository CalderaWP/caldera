'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FormFieldsAutoComplete = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _AutoCompleteField = require('../../fields/AutoCompleteField/AutoCompleteField');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var FormFieldsAutoComplete = exports.FormFieldsAutoComplete = function FormFieldsAutoComplete(_ref) {
	var label = _ref.label,
	    fieldId = _ref.fieldId,
	    form = _ref.form,
	    description = _ref.description,
	    value = _ref.value,
	    additionalOptions = _ref.additionalOptions;

	var options = [].concat(_toConsumableArray(additionalOptions));
	var fields = form.fields;

	fields.forEach(function (field) {
		options.push('%' + field.fieldId + '%');
		options.push(field.label);
	});

	return _react2.default.createElement(_AutoCompleteField.AutoCompleteField, {
		label: label,
		fieldId: fieldId,
		description: description,
		value: value,
		options: options
	});
};

FormFieldsAutoComplete.IDENTIFIER = 'fields-autocomplete';

FormFieldsAutoComplete.propTypes = _extends({}, _AutoCompleteField.AutoCompleteField.propTypes, {
	additionalOptions: _propTypes2.default.array
});

FormFieldsAutoComplete.defaultProps = {
	additionalOptions: []
};