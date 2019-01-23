"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.processorTypesPropType = undefined;

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var processorTypesPropType = exports.processorTypesPropType = _propTypes2.default.arrayOf(_propTypes2.default.shape({
	type: _propTypes2.default.string,
	fields: _propTypes2.default.array,
	conditionals: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		rule: _propTypes2.default.func,
		fields: _propTypes2.default.arrayOf(_propTypes2.default.string)
	}))
}));