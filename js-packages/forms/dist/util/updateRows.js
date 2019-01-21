'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.updateRows = undefined;

var _factory = require('@calderawp/factory');

/**
 *
 * @param {ConditionalState} newState
 * @param {Array} rows
 * @return {Array}
 */
var updateRows = exports.updateRows = function updateRows(newState, rows) {
	var outputRows = [];
	rows.forEach(function (row) {
		var rowId = row.rowId;

		var outputRow = {
			rowId: rowId,
			columns: []
		};
		if (row.columns) {
			row.columns.forEach(function (column) {
				var outputColumn = {
					fields: []
				};
				if (column.fields) {
					column.fields.forEach(function (field) {
						if (field.hasOwnProperty('fieldId')) {
							if (!newState.isFieldHidden(field.fieldId)) {
								outputColumn.fields.push(field);
							}
						}
					});
				}
				outputRow.columns.push(outputColumn);
			});
		}
		outputRows.push(outputRow);
	});

	return outputRows;
};