'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CalderaForm = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formik = require('formik');

var _CalderaGrid = require('./CalderaGrid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CalderaForm = exports.CalderaForm = function CalderaForm(_ref) {
	var formRows = _ref.formRows,
	    initialValues = _ref.initialValues,
	    onSubmit = _ref.onSubmit,
	    onChange = _ref.onChange;

	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_formik.Formik, {
			initialValues: initialValues,
			onSubmit: onSubmit,
			render: function render(_ref2) {
				var errors = _ref2.errors,
				    status = _ref2.status,
				    touched = _ref2.touched,
				    isSubmitting = _ref2.isSubmitting,
				    handleChange = _ref2.handleChange,
				    handleBlur = _ref2.handleBlur,
				    setFieldValue = _ref2.setFieldValue,
				    values = _ref2.values;
				return _react2.default.createElement(
					_formik.Form,
					null,
					_react2.default.createElement(_CalderaGrid.CalderaGrid, {
						rows: formRows,
						onAnyChange: onChange,
						onAnyBlur: handleBlur,
						fieldValues: values,
						setFieldValue: setFieldValue,
						fieldErrors: errors,
						fieldTouched: touched
					}),
					_react2.default.createElement('input', {
						type: 'submit',
						className: 'caldera-forms-submit',
						disabled: isSubmitting,
						value: 'Click Button'
					})
				);
			}
		})
	);
};

CalderaForm.propTypes = _defineProperty({
	formRows: _propTypes2.default.array,
	initialValues: _propTypes2.default.object,
	onSubmit: _propTypes2.default.func,
	onChange: _propTypes2.default.func,
	onBlur: _propTypes2.default.func
}, 'initialValues', _propTypes2.default.object);

var noop = function noop() {};
CalderaForm.defaultProps = {
	onChange: noop,
	onBlur: noop
};