"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Get the class names for a field label
 * @param {string} fieldType
 * @return {string}
 */
var labelClassNames = exports.labelClassNames = function labelClassNames(fieldType) {
  return "caldera-field-label caldera-field-label-" + fieldType;
};