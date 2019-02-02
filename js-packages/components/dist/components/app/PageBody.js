'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PageBody = PageBody;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PageBody(_ref) {
	var pageKey = _ref.pageKey,
	    children = _ref.children;

	return _react2.default.createElement(
		'div',
		{
			className: (0, _classnames2.default)('caldera-page-body', 'caldera-page-body-' + pageKey)
		},
		children
	);
}

PageBody.propTypes = {
	children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
	pageKey: _propTypes2.default.string.isRequired
};