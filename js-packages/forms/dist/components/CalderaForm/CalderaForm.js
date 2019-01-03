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

var _factory = require('@caldera-labs/factory');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//Do not move until it gets tests!
/**
 *
 * @param rows
 * @param onAnyChange Function that runs when any supplied field value changes. Current field values are passed to callback.
 * @param onAnyBlur Function that runs when any field inside of this layout is blurred. Current field values are passed to callback.
 * @param {*} fieldValues Current field values used in layout. {fieldId: fieldValue}
 * @param {*} fieldErrors Current field errors. {fieldId: 'Invalid!'}
 * @param {*} fieldTouched
 * @param {function} setFieldValue
 * @return {*}
 * @constructor
 */
var Layout = function Layout(_ref) {
	var rows = _ref.rows,
	    onAnyChange = _ref.onAnyChange,
	    onAnyBlur = _ref.onAnyBlur,
	    fieldValues = _ref.fieldValues,
	    fieldErrors = _ref.fieldErrors,
	    fieldTouched = _ref.fieldTouched,
	    setFieldValue = _ref.setFieldValue;
	return _react2.default.createElement(
		_react.Fragment,
		null,
		rows.map(function (row) {
			if (_react2.default.isValidElement(row)) {
				var _ref2 = row.props ? row.props : {},
				    key = _ref2.key,
				    _rowId = _ref2.rowId;

				return (0, _react.createElement)(_react.Fragment, {
					key: key ? key : _rowId ? _rowId : 'row-without-key-or-rowId'
				}, row);
			}
			var rowId = row.rowId,
			    columns = row.columns;

			return _react2.default.createElement(
				_factory.Row,
				{
					className: (0, _classnames2.default)('caldera-form-row'),
					key: rowId,
					id: rowId
				},
				columns.map(function (column) {
					var padding = column.padding,
					    width = column.width,
					    columnId = column.columnId,
					    fields = column.fields;

					return _react2.default.createElement(
						_factory.Column,
						{
							key: columnId,
							columnId: columnId,
							width: width,
							padding: padding
						},
						fields.map(function (field) {
							var fieldId = field.fieldId;

							field.value = fieldValues[fieldId];
							return _react2.default.createElement(_factory.FieldArea, {
								key: fieldId,
								field: field,
								onChange: function onChange(newValue) {
									setFieldValue(fieldId, newValue, true);
									onAnyChange(fieldValues);
								},
								onBlur: onAnyBlur,
								fieldErrors: fieldErrors,
								fieldsTouch: fieldTouched
							});
						})
					);
				})
			);
		})
	);
};

Layout.propTypes = {
	rows: _propTypes2.default.array,
	onAnyChange: _propTypes2.default.func,
	onAnyBlur: _propTypes2.default.func,
	fieldValues: _propTypes2.default.object,
	fieldErrors: _propTypes2.default.object,
	fieldTouched: _propTypes2.default.object,
	setFieldValue: _propTypes2.default.func
};

var _noop = function _noop() {};
Layout.defaultProps = {
	onAnyChange: _noop,
	onAnyBlur: _noop,
	setFieldValue: _noop
};

var CalderaForm = exports.CalderaForm = function CalderaForm(_ref3) {
	var formRows = _ref3.formRows,
	    initialValues = _ref3.initialValues,
	    onSubmit = _ref3.onSubmit,
	    onChange = _ref3.onChange;

	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_formik.Formik, {
			initialValues: initialValues,
			onSubmit: onSubmit,
			render: function render(_ref4) {
				var errors = _ref4.errors,
				    status = _ref4.status,
				    touched = _ref4.touched,
				    isSubmitting = _ref4.isSubmitting,
				    handleChange = _ref4.handleChange,
				    handleBlur = _ref4.handleBlur,
				    setFieldValue = _ref4.setFieldValue,
				    values = _ref4.values;
				return _react2.default.createElement(
					_formik.Form,
					null,
					_react2.default.createElement(Layout, {
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