"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Add safe property get/set to objects.
 *
 * @param {*} decoratedObject
 * //http://www.decoretteshop.com/
 *
 * @return {Proxy}
 */
var decorateObjectLiteral = exports.decorateObjectLiteral = function decorateObjectLiteral(decoratedObject) {
	var handler = {
		get: function get(obj, prop) {
			return decoratedObject.hasOwnProperty(prop) ? decoratedObject[prop] : null;
		},
		set: function set(obj, prop, value) {
			if (decoratedObject.hasOwnProperty(prop)) {
				decoratedObject[prop] = value;
				return true;
			}
			return false;
		}
	};
	return new Proxy(decoratedObject, handler);
};

/**
 * Create proxy with property getters, setters and methods.
 *
 * @param {*} decoratedObject
 * @param {*} methods
 *
 * @return {Proxy}
 */
var decorateObjectLiteralWithMethods = exports.decorateObjectLiteralWithMethods = function decorateObjectLiteralWithMethods(decoratedObject, methods) {
	return decorateObjectLiteral(_extends({}, decoratedObject, methods));
};