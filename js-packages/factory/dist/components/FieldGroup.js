'use strict';

Object.defineProperty(exports, "__esModule", {
							value: true
});
exports.FieldGroup = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fieldFactory = require('../factories/fieldFactory');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FieldGroup = exports.FieldGroup = function FieldGroup(_ref) {
							var field = _ref.field,
							    onChange = _ref.onChange;
							return _react2.default.createElement(
														_react.Fragment,
														null,
														(0, _fieldFactory.fieldFactory)(field, onChange)
							);
};