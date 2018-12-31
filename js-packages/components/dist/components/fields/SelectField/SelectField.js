'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SelectField = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('../util');

var _FieldLabel = require('../FieldLabel/FieldLabel');

var _FieldWrapper = require('../FieldWrapper/FieldWrapper');

var _Select = require('../controls/Select');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectField = exports.SelectField = function SelectField(props) {
	var attributes = props.attributes,
	    label = props.label,
	    fieldId = props.fieldId,
	    children = props.children;

	attributes = (0, _util.parseAttributes)(attributes, 'select');
	return _react2.default.createElement(
		_FieldWrapper.FieldWrapper,
		{
			fieldType: 'select'
		},
		_react2.default.createElement(
			_FieldLabel.FieldLabel,
			{
				fieldId: fieldId
			},
			label
		),
		_react2.default.createElement(_Select.Select, props),
		children
	);
};

SelectField.propTypes = {
	label: _propTypes2.default.string,
	description: _propTypes2.default.string,
	fieldId: _propTypes2.default.string,
	required: _propTypes2.default.bool,
	multiple: _propTypes2.default.bool
};

SelectField.defaultProps = {
	required: false,
	multiple: false
};