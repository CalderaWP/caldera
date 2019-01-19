'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MagicRichText = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RichText = require('./RichText');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MagicRichText = exports.MagicRichText = function MagicRichText(props) {
	var modules = props.modules,
	    fieldCompletes = props.fieldCompletes,
	    otherCompletes = props.otherCompletes;

	modules = _extends({}, modules, {
		mention: {
			allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
			mentionDenotationChars: ["{", "%"],
			source: function source(searchTerm, renderList, mentionChar) {
				var values = void 0;

				if (mentionChar === "%") {
					values = fieldCompletes;
				} else {
					values = otherCompletes;
				}

				if (searchTerm.length === 0) {
					renderList(values, searchTerm);
				} else {
					var matches = [];
					for (i = 0; i < values.length; i++) {
						if (~values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())) matches.push(values[i]);
					}renderList(matches, searchTerm);
				}
			}
		}
	});
	return _react2.default.createElement(_RichText.RichText, _extends({}, props, {
		modules: modules
	}));
};

MagicRichText.propTypes = _extends({}, _RichText.RichText.propTypes, {
	fieldCompletes: {},
	otherCompletes: {}
});

MagicRichText.defaultProps = _RichText.RichText.defaultProps;