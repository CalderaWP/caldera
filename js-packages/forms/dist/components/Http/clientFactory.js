'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.formClientFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _FormClient = require('./FormClient');

var _FormClient2 = _interopRequireDefault(_FormClient);

var _submitForm = require('./handlers/submitForm');

var _submitForm2 = _interopRequireDefault(_submitForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {{
 *     id: {string}
 *     fieldValues: {object}
 * }} form
 * @param {string} apiRootUri
 * @param {string}type
 * @param {object }handlers
 * @param {fetch} fetch
 * @return {Proxy}
 */
var formClientFactory = exports.formClientFactory = function formClientFactory(form, apiRootUri) {
	var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'caldera';
	var handlers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	var fetch = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : window.fetch;

	switch (type) {
		case 'caldera':
		default:
			if (!handlers.hasOwnProperty('submitForm')) {
				handlers.submitForm = _submitForm2.default;
			}
			return new _FormClient2.default(form, _extends({
				apiRootUri: apiRootUri,
				fetch: fetch
			}, handlers));
	}
};