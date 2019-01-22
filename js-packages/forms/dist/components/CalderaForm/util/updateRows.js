'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.updateRows = undefined;

var _factory = require('@calderawp/factory');

var findFieldById = function findFieldById(fieldId, fields) {
	if (-1 !== fields.findIndex(function (f) {
		return f.fieldId === fieldId;
	})) {
		return fields.find(function (f) {
			return f.fieldId === fieldId;
		});
	}
};

/**
 *
 * @param {ConditionalState} newState
 * @param {Array} rows
 * @return {Array}
 */
var updateRows = exports.updateRows = function updateRows(newState, rows, fields) {
	var outputRows = [];
	rows.forEach(function (row) {

		if (!row.render) {
			var rowId = row.rowId;

			var outputRow = {
				rowId: rowId,
				columns: []
			};
			if (row.columns) {
				row.columns.forEach(function (column) {
					if (!column.render) {
						var outputColumn = {
							fields: []
						};
						if (column.fields) {
							column.fields.forEach(function (field) {
								if ('string' === typeof field) {
									var _field = findFieldById(field, fields);
									if (_field) {
										field = _field;
									}
								}
								if (field.hasOwnProperty('fieldId')) {
									if (!newState.isFieldHidden(field.fieldId)) {
										outputColumn.fields.push(field);
									}
								}
							});
						}
						outputRow.columns.push(outputColumn);
					} else {
						outputRow.columns.push(column);
					}
				});
			}
			outputRows.push(outputRow);
		} else {
			outputRows.push(row);
		}
	});

	return outputRows;
};