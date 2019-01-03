'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FieldArea = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fieldAreaFactory = require('../factories/fieldAreaFactory');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FieldArea = exports.FieldArea = function FieldArea(_ref) {
	var field = _ref.field,
	    onChange = _ref.onChange,
	    onBlur = _ref.onBlur,
	    fieldErrors = _ref.fieldErrors,
	    fieldsTouch = _ref.fieldsTouch;
	return _react2.default.createElement(
		_react.Fragment,
		null,
		(0, _fieldAreaFactory.fieldAreaFactory)(field, onChange, onBlur, fieldErrors, fieldsTouch)
	);
};