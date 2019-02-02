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

var _collectFieldValues = require('./collectFieldValues');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Fields = exports.Fields = function Fields(_ref) {
	var fields = _ref.fields,
	    _onChange = _ref.onChange,
	    onBlur = _ref.onBlur,
	    className = _ref.className;
	return _react2.default.createElement(
		'div',
		{ className: (0, _classnames2.default)('caldera-fields-wrapper', className) },
		fields.map(function (field) {
			return _react2.default.createElement(_Field.Field, {
				key: field.fieldId,
				field: field,
				onChange: function onChange(newValue) {
					_onChange(_extends({}, (0, _collectFieldValues.collectFieldValues)(fields), _defineProperty({}, field.fieldId, newValue)));
				},
				onBlur: onBlur
			});
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