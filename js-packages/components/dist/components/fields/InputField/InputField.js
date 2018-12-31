'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.InputField = undefined;

var _util = require('../util');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FieldLabel = require('../FieldLabel/FieldLabel');

var _FieldWrapper = require('../FieldWrapper/FieldWrapper');

var _Input = require('../controls/Input');

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
	return _react2.default.createElement(
		_FieldWrapper.FieldWrapper,
		{
			fieldType: fieldType
		},
		_react2.default.createElement(
			_FieldLabel.FieldLabel,
			{
				fieldId: fieldId
			},
			label
		),
		_react2.default.createElement(_Input.Input, {
			fieldId: fieldId,
			value: value,
			placeholder: placeholder,
			type: fieldType,
			onChange: onChange,
			onBlur: onBlur,
			help: description,
			attributes: _attributes
		}),
		children
	);
};

InputField.propTypes = {
	label: _propTypes2.default.string,
	description: _propTypes2.default.string,
	fieldId: _propTypes2.default.string,
	placeholder: _propTypes2.default.string,
	required: _propTypes2.default.bool,
	html5type: _propTypes2.default.string,
	attributes: _propTypes2.default.object,
	value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.array]),
	onChange: _propTypes2.default.func,
	onBlur: _propTypes2.default.func
};

InputField.defaultProps = {
	onBlur: function onBlur() {},
	required: false,
	html5type: 'text'
};