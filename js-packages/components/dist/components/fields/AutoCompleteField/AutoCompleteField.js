'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AutoCompleteField = undefined;

var _components = require('@wordpress/components');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('../util');

var _SelectField = require('../SelectField/SelectField');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AutoCompleteField = exports.AutoCompleteField = function AutoCompleteField(props) {
	var label = props.label,
	    description = props.description,
	    fieldId = props.fieldId,
	    placeholder = props.placeholder,
	    required = props.required,
	    value = props.value,
	    _onChange = props.onChange,
	    onBlur = props.onBlur,
	    options = props.options;

	return _react2.default.createElement(
		_components.BaseControl,
		{
			id: fieldId,
			label: label,
			help: description
		},
		_react2.default.createElement(_components.FormTokenField, {
			className: (0, _util.fieldClassNames)('autocomplete'),
			id: fieldId,
			value: value,
			suggestions: options,
			onChange: function onChange(tokens) {
				return _onChange(tokens);
			},
			placeholder: placeholder
		})
	);
};

AutoCompleteField.propTypes = _SelectField.SelectField.propTypes;
AutoCompleteField.defaultProps = _SelectField.SelectField.defaultProps;