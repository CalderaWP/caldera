'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getValuesFromFormLayout = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _factory = require('@calderawp/factory');

/**
 * Given a Caldera Layout for a form, grab all field values
 *
 * @todo memoize
 *
 * @param {*} rows All rows of layout
 */
var getValuesFromFormLayout = exports.getValuesFromFormLayout = function getValuesFromFormLayout(rows) {
	var values = {};
	rows.map(function (formRow) {
		var columns = formRow.columns;

		columns.map(function (column) {
			var fields = column.fields;

			values = _extends({}, values, (0, _factory.collectFieldValues)(fields));
		});
	});
	return values;
};