'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Fields = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Field = require('./Field');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fields = exports.Fields = function Fields(_ref) {
	var fields = _ref.fields,
	    onChange = _ref.onChange,
	    onBlur = _ref.onBlur,
	    className = _ref.className;
	return _react2.default.createElement(
		'div',
		{ className: (0, _classnames2.default)('caldera-fields-wrapper', className) },
		fields.forEach(function (field) {
			return _react2.default.createElement(_Field.Field, _extends({
				key: field.fieldId
			}, field, {
				onChange: onChange,
				onBlur: onBlur }));
		})
	);
};

Fields.propTypes = {
	field: _propTypes2.default.shape({
		fieldId: _propTypes2.default.string.isRequired
		//input propTypes?
	}),
	onChange: _propTypes2.default.func.isRequired,
	onBlur: _propTypes2.default.func,
	className: _propTypes2.default.string
};