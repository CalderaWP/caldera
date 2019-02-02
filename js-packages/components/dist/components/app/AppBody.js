'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = AppBody;

var _PageBody = require('./PageBody');

var _ContactForm = require('../forms/ContactForm');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import {FormEntryViewer} from "@calderawp/components";

var ListOfForms = function ListOfForms(_ref) {
	var forms = _ref.forms;
	return _react2.default.createElement(
		_react.Fragment,
		null,
		_react2.default.createElement(
			'h2',
			null,
			'List Of Forms'
		),
		_react2.default.createElement(
			'ul',
			null,
			forms.map(function (form) {
				return _react2.default.createElement(
					'li',
					{ key: form.id },
					form.id
				);
			})
		)
	);
};
var findFormById = function findFormById(formId, forms) {
	return forms.find(function (form) {
		return formId === form.id;
	});
};

function AppBody(_ref2) {
	var activeRoute = _ref2.activeRoute,
	    forms = _ref2.forms,
	    getEntries = _ref2.getEntries;

	switch (activeRoute) {
		case 'calderaForms':
			var form = findFormById('contact-form', forms) ? findFormById('contact-form', forms) : false;
			var entries = getEntries('contact-form', 1);
			return _react2.default.createElement(
				_PageBody.PageBody,
				{ pageKey: activeRoute },
				_react2.default.createElement(ListOfForms, { forms: forms }),
				_react2.default.createElement(_ContactForm.ContactForm, { form: form })
			);
		case 'calderaSocial':
			return _react2.default.createElement(
				_PageBody.PageBody,
				{ pageKey: activeRoute },
				_react2.default.createElement(
					'div',
					null,
					'Caldera Social'
				)
			);
		case 'calderaPay':
			return _react2.default.createElement(
				_PageBody.PageBody,
				{ pageKey: activeRoute },
				_react2.default.createElement(
					'div',
					null,
					'Caldera Pay'
				)
			);
		case 'home':
		default:
			return _react2.default.createElement(
				'div',
				null,
				'Admin Landing'
			);
	}
}

AppBody.propTypes = {
	activeRoute: _propTypes2.default.string.isRequired,
	forms: _propTypes2.default.array
};

AppBody.defaultProps = {
	forms: {}
};