'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Rows = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Row = require('./Row');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Rows = exports.Rows = function Rows(_ref) {
	var rows = _ref.rows,
	    onChange = _ref.onChange,
	    onBlur = _ref.onBlur,
	    className = _ref.className;
	return _react2.default.createElement(
		_react.Fragment,
		null,
		rows.forEach(function (row) {
			return _react2.default.createElement(_Row.Row, _extends({
				key: row.rowId
			}, row, {
				onChange: onChange,
				onBlur: onBlur }));
		})
	);
};

Rows.propTypes = {
	rows: _propTypes2.default.arrayOf(_propTypes2.default.shape(_Row.rowPropTypes)),
	onChange: _propTypes2.default.func.isRequired,
	onBlur: _propTypes2.default.func,
	className: _propTypes2.default.string
};