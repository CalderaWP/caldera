'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.rowPropTypes = exports.Row = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Fields = require('./Fields');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _grid = require('@rebass/grid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a row of fields with a shared onChange/onBlur event for all values
 * @param columns
 * @param onChange
 * @param onBlur
 * @param className
 * @param rowId
 * @return {*}
 * @constructor
 */
var Row = exports.Row = function Row(_ref) {
	var columns = _ref.columns,
	    onChange = _ref.onChange,
	    onBlur = _ref.onBlur,
	    className = _ref.className,
	    rowId = _ref.rowId;
	return _react2.default.createElement(
		_grid.Flex,
		{
			className: (0, _classnames2.default)('caldera-row', className),
			id: rowId
		},
		columns.map(function (column) {
			var width = column.width,
			    padding = column.padding,
			    columnId = column.columnId,
			    fields = column.fields;


			padding = padding ? padding : 8;

			return _react2.default.createElement(
				_grid.Box,
				{
					key: columnId,
					id: columnId,
					width: width,
					px: padding,
					py: padding
				},
				_react2.default.createElement(_Fields.Fields, {
					fields: fields,
					onChange: onChange,
					onBlur: onBlur
				})
			);
		})
	);
};

/**
 * Row prop types
 *
 * @type {{columns: shim, rowId: *, onChange: *, onBlur: shim, className: shim}}
 */
var rowPropTypes = exports.rowPropTypes = {
	columns: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		fields: _propTypes2.default.array.isRequired,
		width: _propTypes2.default.string.isRequired,
		columnId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
		//input propTypes?
	})),
	rowId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	onChange: _propTypes2.default.func.isRequired,
	onBlur: _propTypes2.default.func,
	className: _propTypes2.default.string
};
Row.propTypes = rowPropTypes;