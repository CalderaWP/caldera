"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Get the class names for a fieldset
 * @param {string} fieldType
 * @return {string}
 */
var fieldSetClassNames = exports.fieldSetClassNames = function fieldSetClassNames(fieldType) {
  return "caldera-fieldset caldera-fieldset-" + fieldType;
};