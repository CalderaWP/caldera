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

var CalderaForm = exports.CalderaForm = function CalderaForm(_ref) {
	var formRows = _ref.formRows,
	    initialValues = _ref.initialValues,
	    onSubmit = _ref.onSubmit,
	    _onChange = _ref.onChange;

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
					formRows.map(function (formRow) {
						var rowId = formRow.rowId,
						    columns = formRow.columns;

						return _react2.default.createElement(
							_factory.Row,
							{
								className: (0, _classnames2.default)('caldera-form-row'),
								key: rowId,
								id: rowId
							},
							columns.map(function (column) {
								if (_react2.default.isValidElement(column)) {
									return createEl;
								}
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

										field.value = values[fieldId];
										return _react2.default.createElement(_factory.FieldArea, {
											key: fieldId,
											field: field,
											onChange: function onChange(newValue) {
												setFieldValue(fieldId, newValue, true);
												_onChange(values);
											},
											onBlur: handleBlur,
											fieldErrors: errors,
											fieldsTouch: touched
										});
									})
								);
							})
						);
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

CalderaForm.propTypes = {
	formRows: _propTypes2.default.array,
	initialValues: _propTypes2.default.object,
	onSubmit: _propTypes2.default.func,
	onChange: _propTypes2.default.func
};
var noop = function noop() {};
CalderaForm.defaultProps = {
	onChange: noop
};