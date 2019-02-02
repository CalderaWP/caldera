'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Get the values of all config fields
 * @param fields
 */
var collectFieldValues = exports.collectFieldValues = function collectFieldValues(fields) {
	var values = {};
	fields.forEach(function (field) {
		if ('object' === (typeof field === 'undefined' ? 'undefined' : _typeof(field))) {
			values[field.fieldId] = field.value ? field.value : null;
		}
	});
	return values;
};