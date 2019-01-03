'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fieldAreaFactory = undefined;

var _components = require('@caldera-labs/components');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _fieldFactory = require('./fieldFactory');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fieldAreaFactory = exports.fieldAreaFactory = function fieldAreaFactory(field, onChange, onBlur, fieldErrors, fieldsTouch) {
	var fieldType = field.fieldType,
	    fieldId = field.fieldId,
	    required = field.required;

	var error = fieldErrors && fieldErrors[fieldId];
	var touched = fieldsTouch && fieldsTouch[fieldId];
	return _react2.default.createElement(
		_components.FieldWrapper,
		{
			fieldType: 'text',
			className: (0, _classnames2.default)('caldera-field-group', {
				'has-error': touched && error,
				'is-required': required
			})
		},
		_react2.default.createElement(
			_react.Fragment,
			{ key: fieldId + '-1' },
			(0, _fieldFactory.fieldFactory)(field, onChange, onBlur)
		),
		touched && error && _react2.default.createElement(
			_react.Fragment,
			{ key: fieldId + '-2' },
			_react2.default.createElement(_components.Message, {
				message: {
					error: true,
					message: error
				}
			})
		)
	);
};