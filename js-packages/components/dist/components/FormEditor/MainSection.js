'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MainSection = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainSection = exports.MainSection = function MainSection(_ref) {
	var title = _ref.title,
	    className = _ref.className,
	    children = _ref.children;
	return _react2.default.createElement(
		'div',
		{
			className: className
		},
		_react2.default.createElement(
			'h2',
			null,
			title
		),
		children
	);
};