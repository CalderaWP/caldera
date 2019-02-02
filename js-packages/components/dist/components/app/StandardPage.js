'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.StandardPage = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TopBar = require('./TopBar');

var _PageBody = require('./PageBody');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StandardPage = exports.StandardPage = function StandardPage(_ref) {
	var className = _ref.className,
	    children = _ref.children,
	    pageTitle = _ref.pageTitle,
	    pageKey = _ref.pageKey,
	    onChangeActive = _ref.onChangeActive;
	return _react2.default.createElement(
		'div',
		{ className: className },
		_react2.default.createElement(_TopBar.TopBar, { onChangeActive: onChangeActive }),
		_react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'h1',
				null,
				pageTitle
			)
		),
		_react2.default.createElement(
			_PageBody.PageBody,
			{ pageKey: pageKey },
			children
		)
	);
};

var noop = function noop() {};
StandardPage.defualtProps = {
	onChangeActive: noop
};