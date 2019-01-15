'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Processor = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _forms = require('@calderawp/forms');

var _CalderaForm = require('@calderawp/forms/src/components/CalderaForm');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var Processor = exports.Processor = function Processor(_ref) {
	_objectDestructuringEmpty(_ref);

	return _react2.default.createElement(
		_react.Fragment,
		null,
		_react2.default.createElement(_forms.CalderaForm, {
			formRows: formRows,
			initialValues: initialValues,
			onSubmit: function onSubmit(
			//current values of all fields
			values, actions) {
				setTimeout(function () {
					alert(JSON.stringify(values, null, 2));
					actions.setSubmitting(false);
				}, 1000);
			},
			onChange: function onChange(values) {
				console.log(values); //all field values
			}
		})
	);
};

Processor.propTypes = {};