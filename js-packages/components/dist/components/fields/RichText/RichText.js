'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.RichText = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactQuill = require('react-quill');

var _reactQuill2 = _interopRequireDefault(_reactQuill);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import 'react-quill/dist/quill.snow.css'; // ES6
//import 'react-quill/dist/quill.snow.css'; // ES6
var RichText = exports.RichText = function RichText(onChange, value, modules, formats, placeholder) {
	return _react2.default.createElement(
		'div',
		{
			className: (0, _util.fieldClassNames)('richtext')
		},
		_react2.default.createElement(_reactQuill2.default, {
			theme: 'snow',
			onChange: onChange,
			value: value,
			modules: modules,
			formats: formats,
			placeholder: placeholder
		})
	);
};

RichText.propTypes = {
	value: _propTypes2.default.string,
	placeholder: _propTypes2.default.string,
	onChange: _propTypes2.default.func,
	formats: _propTypes2.default.array,
	modules: _propTypes2.default.object
};

RichText.defaultProps = {
	formats: ['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', 'video'],
	modules: {
		toolbar: [[{ 'header': '1' }, { 'header': '2' }, { 'font': [] }], [{ size: [] }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }], ['link'], ['clean']],
		clipboard: {
			matchVisual: true
		}
	}

};