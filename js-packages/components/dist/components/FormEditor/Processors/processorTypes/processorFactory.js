'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = processorFactory;

var _defaultProcessorTypes = require('./defaultProcessorTypes');

var shortid = require('shortid');

function processorFactory(type) {
	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	//put hook here
	var processorTypes = _defaultProcessorTypes.defaultProcessorTypes;
	return _extends({}, processorTypes.find(function (p) {
		return type === p.type;
	}), {
		id: shortid.generate()
	});
};