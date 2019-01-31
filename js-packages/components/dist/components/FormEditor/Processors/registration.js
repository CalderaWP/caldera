'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var defaultRegistry = [];

/**
 * Add a processor type to form editor
 *
 * @param {*} processorType Defintion of processor type
 * @param {Array} registry Optional. Collection to add to -- generally you leave this at default.
 * @return {Array}
 */
var registerProcessorType = exports.registerProcessorType = function registerProcessorType(processorType) {
  var registry = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRegistry;

  if ('object' === (typeof processorType === 'undefined' ? 'undefined' : _typeof(processorType)) && processorType.hasOwnProperty('type')) {
    return [processorType].concat(_toConsumableArray(registry));
  }

  return registry;
};

/**
 * Get a processor type
 *
 * @param {string} processorType
 * @param {Array} registry
 * @return {*}
 */
var unregisterProcessorType = exports.unregisterProcessorType = function unregisterProcessorType(processorType) {
  var registry = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRegistry;

  if ('object' === (typeof processorType === 'undefined' ? 'undefined' : _typeof(processorType)) && processorType.hasOwnProperty('type')) {
    processorType = processorType.type;
  }
  var index = registry.findIndex(function (p) {
    return p.type === processorType;
  });
  if (0 <= index) {
    registry.splice(index, 1);
    return [].concat(_toConsumableArray(registry));
  }
  return registry;
};

/**
 * Get all processors from collection
 *
 * @param registry
 * @return {Array}
 */
var getProcessors = exports.getProcessors = function getProcessors() {
  var registry = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultRegistry;

  return registry;
};