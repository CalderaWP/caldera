'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FieldGroup = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fieldGroupFactory = require('../factories/fieldGroupFactory');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FieldGroup = exports.FieldGroup = function FieldGroup(_ref) {
	var field = _ref.field,
	    onChange = _ref.onChange,
	    onBlur = _ref.onBlur,
	    fieldErrors = _ref.fieldErrors,
	    fieldsTouch = _ref.fieldsTouch;
	return _react2.default.createElement(
		_react.Fragment,
		null,
		(0, _fieldGroupFactory.fieldGroupFactory)(field, onChange, onBlur, fieldErrors, fieldsTouch)
	);
};