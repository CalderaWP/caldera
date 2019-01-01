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
 *
 * @param columns
 * @param onChange
 * @param onBlur
 * @param className
 * @param rowId
 * @param children
 * @return {*}
 * @constructor
 */
var Row = exports.Row = function Row(_ref) {
	var columns = _ref.columns,
	    onChange = _ref.onChange,
	    onBlur = _ref.onBlur,
	    className = _ref.className,
	    rowId = _ref.rowId,
	    children = _ref.children;

	return _react2.default.createElement(
		_grid.Flex,
		{ className: (0, _classnames2.default)('caldera-row', className), id: rowId },
		columns ? _react2.default.createElement(
			_react.Fragment,
			null,
			columns.map(function (column) {
				var width = column.width,
				    padding = column.padding,
				    columnId = column.columnId;


				padding = padding ? padding : 8;

				return _react2.default.createElement(
					Column,
					{
						key: columnId,
						id: columnId,
						width: width,
						px: padding,
						py: padding
					},
					children
				);
			})
		) : _react2.default.createElement(
			_react.Fragment,
			null,
			children
		)
	);
};

/**
 * Row prop types
 *
 * @type {{columns: shim, rowId: *, onChange: *, onBlur: shim, className: shim}}
 */
var rowPropTypes = exports.rowPropTypes = {
	columns: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		width: _propTypes2.default.string.isRequired,
		columnId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
	})),
	rowId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	onChange: _propTypes2.default.func,
	onBlur: _propTypes2.default.func,
	className: _propTypes2.default.string
};
Row.propTypes = rowPropTypes;