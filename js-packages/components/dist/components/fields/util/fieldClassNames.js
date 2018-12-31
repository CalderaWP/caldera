"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Get the class names for a field
 * @param {string} fieldType
 * @return {string}
 */
var fieldClassNames = exports.fieldClassNames = function fieldClassNames(fieldType) {
  return "caldera-field caldera-field-" + fieldType;
};