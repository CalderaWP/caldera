'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CalderaGrid = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _factory = require('@calderawp/factory');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ConditionalState = require('./state/ConditionalState');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var CalderaGrid = exports.CalderaGrid = function CalderaGrid(_ref) {
	var rows = _ref.rows,
	    onAnyChange = _ref.onAnyChange,
	    onAnyBlur = _ref.onAnyBlur,
	    fieldValues = _ref.fieldValues,
	    fieldErrors = _ref.fieldErrors,
	    fieldTouched = _ref.fieldTouched,
	    setFieldValue = _ref.setFieldValue,
	    conditionalState = _ref.conditionalState,
	    applyConditionalRules = _ref.applyConditionalRules;
	return _react2.default.createElement(
		_react.Fragment,
		null,
		rows.map(function (row) {
			var rowId = row.rowId,
			    columns = row.columns,
			    render = row.render;


			if (render) {
				return (0, _react.createElement)(render, _extends({}, row, {
					key: rowId
				}));
			}

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
					    fields = column.fields,
					    render = column.render,
					    key = column.key;

					if (render) {
						return (0, _react.createElement)(render, _extends({}, column, {
							key: columnId
						}));
					}
					return _react2.default.createElement(
						_factory.Column,
						{
							key: columnId,
							columnId: columnId,
							width: width,
							padding: padding
						},
						fields.map(function (field) {
							if (!field) {
								return;
							}
							var fieldId = field.fieldId,
							    render = field.render,
							    key = field.key;

							field.value = fieldValues[fieldId];

							var _key = render ? key : fieldId;
							return _react2.default.createElement(_factory.FieldArea, {
								render: render,
								key: _key,
								field: field,
								onChange: function onChange(newValue) {
									conditionalState.setValue(fieldId, newValue);
									applyConditionalRules();
									setFieldValue(fieldId, conditionalState.getValue(fieldId), true);
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

CalderaGrid.propTypes = {
	applyConditionalRules: _propTypes2.default.func,
	conditionalState: _propTypes2.default.instanceOf(_ConditionalState.ConditionalState),
	rows: _propTypes2.default.array,
	onAnyChange: _propTypes2.default.func,
	onAnyBlur: _propTypes2.default.func,
	fieldValues: _propTypes2.default.object,
	fieldErrors: _propTypes2.default.object,
	fieldTouched: _propTypes2.default.object,
	setFieldValue: _propTypes2.default.func
};

var _noop = function _noop() {};
CalderaGrid.defaultProps = {
	onAnyChange: _noop,
	onAnyBlur: _noop,
	setFieldValue: _noop,
	fieldValues: {}
};