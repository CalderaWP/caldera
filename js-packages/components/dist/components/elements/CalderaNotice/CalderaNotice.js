'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CalderaNotice = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('@wordpress/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CalderaNotice = exports.CalderaNotice = function CalderaNotice(_ref) {
	var children = _ref.children,
	    isError = _ref.isError;
	return _react2.default.createElement(
		_components.Notice,
		{ status: isError ? 'error' : 'success' },
		children
	);
};