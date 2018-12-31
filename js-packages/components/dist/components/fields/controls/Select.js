"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Select = undefined;

var _components = require("@wordpress/components");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = exports.Select = function Select(_ref) {
	var fieldId = _ref.fieldId,
	    value = _ref.value,
	    label = _ref.label,
	    multiple = _ref.multiple,
	    onChange = _ref.onChange,
	    onBlur = _ref.onBlur,
	    attributes = _ref.attributes,
	    description = _ref.description,
	    required = _ref.required,
	    options = _ref.options;
	return _react2.default.createElement(_components.SelectControl, {
		label: label,
		help: description,
		value: value,
		required: required,
		options: options,
		onChange: onChange,
		onBlur: onBlur
	});
};