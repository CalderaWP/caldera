'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Field = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fieldFactory = require('../factories/fieldFactory');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Field = exports.Field = function Field(_ref) {
	var field = _ref.field,
	    onChange = _ref.onChange,
	    onBlur = _ref.onBlur,
	    messages = _ref.messages;
	return _react2.default.createElement(
		_react.Fragment,
		null,
		(0, _fieldFactory.fieldFactory)(field, onChange, onBlur, messages)
	);
};