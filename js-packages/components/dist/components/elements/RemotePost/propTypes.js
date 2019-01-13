'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.postPropTypes = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Prop type definitions for the RemotePost component
 *
 * @type {{form: shim, formId: (boolean|*), onFormUpdate: (boolean|*)}}
 */
var postPropTypes = exports.postPropTypes = {
	post: _propTypes2.default.shape({
		id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
		title: _propTypes2.default.shape({
			rendered: _propTypes2.default.string.isRequired
		}),
		content: _propTypes2.default.shape({
			rendered: _propTypes2.default.string.isRequired
		})
	}).isRequired
};