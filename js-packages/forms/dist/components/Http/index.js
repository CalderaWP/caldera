'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.decorateObjectLiteralWithMethods = exports.formClientFactory = exports.FormClient = undefined;

var _clientFactory = require('./clientFactory');

Object.defineProperty(exports, 'formClientFactory', {
	enumerable: true,
	get: function get() {
		return _clientFactory.formClientFactory;
	}
});

var _decoratorFactory = require('./decoratorFactory/decoratorFactory');

Object.defineProperty(exports, 'decorateObjectLiteralWithMethods', {
	enumerable: true,
	get: function get() {
		return _decoratorFactory.decorateObjectLiteralWithMethods;
	}
});

var _FormClient2 = require('./FormClient');

var _FormClient3 = _interopRequireDefault(_FormClient2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.FormClient = _FormClient3.default;