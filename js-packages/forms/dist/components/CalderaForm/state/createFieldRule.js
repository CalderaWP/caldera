'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * Create a conditional rule
 *
 * @param {string} test
 * @param {string} fieldId
 * @param {string|int|array} testValue
 * @return {function(*=): boolean}
 */
var createFieldRule = exports.createFieldRule = function createFieldRule(test, fieldId, testValue) {
	var findFieldValue = function findFieldValue(fieldId, fieldValues) {
		return fieldValues.hasOwnProperty(fieldId) ? fieldValues[fieldId] : null;
	};

	switch (test) {
		case 'is':
			return function (fieldValues) {
				var value = findFieldValue(fieldId, fieldValues);
				return value == testValue;
			};
		case 'not':
			return function (fieldValues) {
				var value = findFieldValue(fieldId, fieldValues);
				return value !== testValue;
			};

	};
};