'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FormList = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Form = require('./Form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormList = exports.FormList = function FormList(props) {
	var isAlternate = true;
	var forms = Array.isArray(props.form) ? props.form : Object.values(props.forms);
	return _react2.default.createElement(
		'table',
		{ className: 'widefat fixed' },
		_react2.default.createElement(
			'thead',
			null,
			_react2.default.createElement(
				'tr',
				null,
				_react2.default.createElement(
					'th',
					null,
					'Form'
				),
				_react2.default.createElement(
					'th',
					{
						style: { width: '5em', textAlign: 'center' } },
					'Entries'
				)
			)
		),
		_react2.default.createElement(
			'tbody',
			null,
			forms.map(function (form) {
				isAlternate = !isAlternate;
				return _react2.default.createElement(_Form.Form, {
					key: form.ID,
					form: form,
					onFormUpdate: props.onFormUpdate,
					openEntryViewerForForm: function openEntryViewerForForm() {
						props.openEntryViewerForForm(form.ID);
					},
					isAlternate: isAlternate
				});
			})
		)
	);
};

FormList.propTypes = {
	forms: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
	onFormUpdate: _propTypes2.default.func.isRequired,
	openEntryViewerForForm: _propTypes2.default.func.isRequired
};