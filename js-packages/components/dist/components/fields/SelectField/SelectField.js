'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SelectField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('@wordpress/components');

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectField = exports.SelectField = function SelectField(_ref) {
	var attributes = _ref.attributes,
	    label = _ref.label,
	    fieldId = _ref.fieldId,
	    onChange = _ref.onChange,
	    value = _ref.value,
	    options = _ref.options,
	    multiple = _ref.multiple,
	    description = _ref.description,
	    placeholder = _ref.placeholder;

	attributes = (0, _util.parseAttributes)(attributes, 'select');

	if (!value && placeholder) {
		options.unshift({
			label: placeholder
		});
	}
	return _react2.default.createElement(_components.SelectControl, _extends({
		className: (0, _util.fieldClassNames)('select'),
		id: fieldId,
		value: value,
		options: options,
		onChange: onChange,
		label: label,
		help: description
	}, attributes));
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