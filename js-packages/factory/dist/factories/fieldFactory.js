'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fieldFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _components = require('@caldera-labs/components');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fieldFactory = exports.fieldFactory = function fieldFactory(field, onChange, onBlur) {
	var fieldType = field.fieldType,
	    label = field.label,
	    attributes = field.attributes,
	    options = field.options,
	    fieldId = field.fieldId;


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
					})
				);
			} else {
				return _react2.default.createElement(_components.InputField, _extends({}, field, { onChange: onChange
				}));
			}
			break;
		case 'select':
		case 'dropdown':
			return _react2.default.createElement(_components.SelectField, _extends({}, field, {
				onChange: onChange

			}));
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
			return _react2.default.createElement(_components.InputField, _extends({}, field, {
				onChange: onChange
			}));
			break;
	}
};