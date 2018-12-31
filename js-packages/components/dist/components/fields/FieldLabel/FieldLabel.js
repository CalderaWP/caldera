'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FieldLabel = undefined;

var _util = require('../util');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FieldLabel = exports.FieldLabel = function FieldLabel(_ref) {
	var fieldType = _ref.fieldType,
	    children = _ref.children,
	    fieldId = _ref.fieldId;

	return _react2.default.createElement(
		'label',
		{
			htmlFor: fieldId,
			className: (0, _util.labelClassNames)(fieldType)
		},
		children
	);
};