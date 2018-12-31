'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FieldWrapper = undefined;

var _util = require('../util');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FieldWrapper = exports.FieldWrapper = function FieldWrapper(_ref) {
	var fieldType = _ref.fieldType,
	    children = _ref.children;

	return _react2.default.createElement(
		'div',
		{ className: (0, _util.fieldClassNames)(fieldType) },
		children
	);
};

FieldWrapper.propTypes = {
	fieldType: _propTypes2.default.string.isRequired,
	children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired
};