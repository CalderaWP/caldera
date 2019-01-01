'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.InputField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _util = require('../util');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('@wordpress/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputField = exports.InputField = function InputField(_ref) {
	var label = _ref.label,
	    description = _ref.description,
	    fieldId = _ref.fieldId,
	    placeholder = _ref.placeholder,
	    required = _ref.required,
	    html5type = _ref.html5type,
	    value = _ref.value,
	    onChange = _ref.onChange,
	    onBlur = _ref.onBlur,
	    attributes = _ref.attributes,
	    children = _ref.children;

	var fieldType = (0, _util.isValidHtml5type)(html5type) ? html5type : 'text';
	var _attributes = (0, _util.parseAttributes)(attributes, fieldType);
	if ('checkbox' === fieldType) {
		var checked = value ? true : false;
		return _react2.default.createElement(_components.CheckboxControl, _extends({
			id: fieldId,
			checked: checked,
			help: description
		}, _attributes, {
			onChange: onChange,
			label: label
		}));
	} else {
		return _react2.default.createElement(_components.TextControl, _extends({
			label: label,
			className: (0, _util.fieldClassNames)(fieldType),
			id: fieldId,
			value: value,
			placeholder: placeholder,
			type: fieldType,
			onChange: onChange,
			onBlur: onBlur,
			help: description
		}, _attributes));
	}
};

InputField.propTypes = {
	label: _propTypes2.default.string,
	description: _propTypes2.default.string,
	fieldId: _propTypes2.default.string,
	placeholder: _propTypes2.default.string,
	required: _propTypes2.default.bool,
	html5type: _propTypes2.default.string,
	attributes: _propTypes2.default.object,
	value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.array, _propTypes2.default.bool]),
	onChange: _propTypes2.default.func,
	onBlur: _propTypes2.default.func
};

InputField.defaultProps = {
	onBlur: function onBlur() {},
	required: false,
	html5type: 'text'
};