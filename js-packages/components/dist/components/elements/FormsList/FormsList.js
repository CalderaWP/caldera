'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FormsList = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('@wordpress/components');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _FormListItem = require('../FormListItem/FormListItem');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param forms
 * @param panelTitle
 * @param classname
 * @param onFormAction
 * @return {*}
 * @constructor
 */
var FormsList = exports.FormsList = function FormsList(_ref) {
	var forms = _ref.forms,
	    panelTitle = _ref.panelTitle,
	    classname = _ref.classname,
	    onFormAction = _ref.onFormAction;
	return _react2.default.createElement(
		_components.Panel,
		{ classname: (0, _classnames2.default)(classname) },
		_react2.default.createElement(
			_components.PanelBody,
			{ title: panelTitle, icon: 'feedback', initialOpen: true },
			forms.map(function (form) {
				return _react2.default.createElement(
					_components.PanelRow,
					{ key: form.id },
					_react2.default.createElement(_FormListItem.FormListItem, {
						key: form.id,
						form: form,
						onFormAction: onFormAction
					})
				);
			})
		)
	);
};

/**
 * Prop type definitions for the FormsList component
 *
 * @type {{forms: shim, panelTitle: shim, noFormsMessage: shim, onFormAction: *}}
 */
FormsList.propTypes = {
	forms: _propTypes2.default.array,
	panelTitle: _propTypes2.default.string,
	noFormsMessage: _propTypes2.default.string,
	onFormAction: _propTypes2.default.func.isRequired
};

/**
 * Default props for the forms list component.
 *
 * @type {{forms: Array, panelTitle: string, noFormsMessage: string}}
 */
FormsList.defaultProps = {
	forms: [],
	panelTitle: 'All Forms',
	noFormsMessage: 'No Forms Found'
};