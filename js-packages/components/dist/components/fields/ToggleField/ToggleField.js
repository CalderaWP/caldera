'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ToggleField = undefined;

var _util = require('../util');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('@wordpress/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleField = exports.ToggleField = function ToggleField(_ref) {
	var label = _ref.label,
	    description = _ref.description,
	    fieldId = _ref.fieldId,
	    placeholder = _ref.placeholder,
	    required = _ref.required,
	    html5type = _ref.html5type,
	    onChange = _ref.onChange,
	    onBlur = _ref.onBlur,
	    checked = _ref.checked;


	return _react2.default.createElement(
		_components.BaseControl,
		{
			id: fieldId,
			label: label,
			help: description
		},
		_react2.default.createElement(_components.ToggleControl, {
			onBlur: onBlur,
			checked: checked,
			onChange: onChange
		})
	);
};

ToggleField.propTypes = {
	label: _propTypes2.default.string,
	description: _propTypes2.default.string,
	fieldId: _propTypes2.default.string,
	placeholder: _propTypes2.default.string,
	required: _propTypes2.default.bool,
	checked: _propTypes2.default.bool,
	onChange: _propTypes2.default.func,
	onBlur: _propTypes2.default.func
};

ToggleField.defaultProps = {
	onBlur: function onBlur() {},
	required: false
};