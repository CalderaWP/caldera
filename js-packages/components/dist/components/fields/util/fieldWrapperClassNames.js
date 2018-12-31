"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Get the class names for a field wrapper
 * @param {string} fieldType
 * @return {string}
 */
var fieldWrapperClassNames = exports.fieldWrapperClassNames = function fieldWrapperClassNames(fieldType) {
  return "caldera-field-wrapper caldera-field-wrapper-" + fieldType;
};