"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Input = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _components = require("@wordpress/components");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = exports.Input = function Input(_ref) {
	var fieldId = _ref.fieldId,
	    value = _ref.value,
	    placeholder = _ref.placeholder,
	    type = _ref.type,
	    onChange = _ref.onChange,
	    onBlur = _ref.onBlur,
	    help = _ref.help,
	    attributes = _ref.attributes,
	    description = _ref.description,
	    fieldType = _ref.fieldType;
	return _react2.default.createElement(_components.TextControl, _extends({
		id: fieldId,
		value: value,
		placeholder: placeholder,
		type: fieldType,
		onChange: onChange,
		onBlur: onBlur,
		help: description
	}, attributes));
};