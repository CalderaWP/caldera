'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = fieldFactory;

var _components = require('@caldera-labs/components');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fieldFactory(field) {
	switch (field.type) {
		case 'text':
		case 'email':
		case 'checkbox':
		case 'number':
		case 'input':
		default:
			return _react2.default.createElement(_components.InputField, field);
			break;
	}
}