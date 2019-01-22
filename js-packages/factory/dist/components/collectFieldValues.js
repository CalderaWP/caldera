"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * Get the values of all config fields
 * @param fields
 */
var collectFieldValues = exports.collectFieldValues = function collectFieldValues(fields) {
	var values = {};
	fields.forEach(function (field) {
		if (field) {
			values[field.fieldId] = field.value ? field.value : null;
		}
	});
	return values;
};