'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fieldFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _components = require('@caldera-labs/components');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TheMessage = function TheMessage(messages, fieldId) {
	return undefined !== (typeof messages === 'undefined' ? 'undefined' : _typeof(messages)) && messages.hasOwnProperty('message') ? _react2.default.createElement(_components.Message, {
		message: {
			message: 'Hi Roy',
			error: false
		}
	}) : _react2.default.createElement(_react.Fragment, null);
};
var fieldFactory = exports.fieldFactory = function fieldFactory(field, onChange, onBlur) {
	var fieldType = field.fieldType,
	    label = field.label,
	    attributes = field.attributes,
	    options = field.options,
	    fieldId = field.fieldId,
	    messages = field.messages;


	var Message = TheMessage(messages, fieldId);
	switch (fieldType) {
		case 'checkbox':
		case 'checkboxes':
			if ('checkboxes' === fieldType || fieldType.hasOwnProperty('options')) {
				return _react2.default.createElement(
					_components.FieldSet,
					{
						fieldType: fieldType,
						legend: label,
						attributes: attributes
					},
					options.map(function (option) {
						var value = option.value,
						    label = option.label,
						    description = option.description,
						    attributes = option.attributes;

						var fieldId = option.hasOwnProperty('id') ? option.id : 'opt-' + fieldId + '-' + option.value;
						return _react2.default.createElement(_components.InputField, {
							key: fieldId,
							fieldId: fieldId,
							value: value,
							label: label,
							description: description,
							html5type: 'checkbox',
							attributes: attributes,
							onChange: onChange
						});
					}),
					_react2.default.createElement(Message, null)
				);
			} else {
				return _react2.default.createElement(
					_components.InputField,
					_extends({}, field, { onChange: onChange
					}),
					_react2.default.createElement(TheMessage, null)
				);
			}
			break;
		case 'select':
		case 'dropdown':
			return _react2.default.createElement(
				_components.SelectField,
				_extends({}, field, {
					onChange: onChange

				}),
				_react2.default.createElement(Message, null)
			);
			break;
		case 'text':
		case 'email':
		case 'number':
		case 'input':
		default:
			if ((0, _components.isValidHtml5type)(fieldType)) {
				field.html5type = fieldType;
			} else {
				field.html5type = 'text';
			}
			return _react2.default.createElement(
				_components.InputField,
				_extends({}, field, {
					onChange: onChange
				}),
				_react2.default.createElement(TheMessage, null)
			);
			break;
	}
};