'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FieldWrapper = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _util = require('../util');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param fieldType
 * @param attributes
 * @param children
 * @return {*}
 * @constructor
 */
var FieldWrapper = exports.FieldWrapper = function FieldWrapper(_ref) {
	var fieldType = _ref.fieldType,
	    attributes = _ref.attributes,
	    children = _ref.children;

	return _react2.default.createElement(
		'div',
		_extends({ className: (0, _util.fieldWrapperClassNames)(fieldType) }, attributes),
		children
	);
};

FieldWrapper.propTypes = {
	fieldType: _propTypes2.default.string.isRequired,
	children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,
	attributes: _propTypes2.default.object
};