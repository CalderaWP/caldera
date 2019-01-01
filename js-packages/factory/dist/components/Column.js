'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Column = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _grid = require('@rebass/grid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Column = exports.Column = function Column(_ref) {
	var columnId = _ref.columnId,
	    padding = _ref.padding,
	    width = _ref.width,
	    children = _ref.children,
	    className = _ref.className;
	return _react2.default.createElement(
		_grid.Box,
		{
			className: (0, _classnames2.default)('caldera-column', className),
			key: columnId,
			id: columnId,
			width: width,
			px: padding,
			py: padding
		},
		children
	);
};