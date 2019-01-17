'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FormListItem = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('@wordpress/components');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param form
 * @param onFormAction
 * @return {*}
 * @constructor
 */
var FormListItem = exports.FormListItem = function FormListItem(_ref) {
	var form = _ref.form,
	    onFormAction = _ref.onFormAction;
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'div',
			null,
			form.name
		),
		_react2.default.createElement(
			_components.Toolbar,
			null,
			_react2.default.createElement(_components.IconButton, {
				icon: 'edit',
				label: 'Edit Form',
				className: 'form-list-item form-list-item-edit',
				onClick: function onClick() {
					onFormAction(form.id, 'edit');
				}
			}),
			_react2.default.createElement(_components.IconButton, {
				icon: 'list-view',
				label: 'View Entries',
				className: 'form-list-item form-list-item-view-entries',
				onClick: function onClick() {
					onFormAction(form.id, 'view-entries');
				}
			}),
			_react2.default.createElement(_components.IconButton, {
				icon: 'feedback',
				label: 'Preview Form',
				className: 'form-list-item form-list-item-preview',
				onClick: function onClick() {
					onFormAction(form.id, 'preview');
				}
			}),
			_react2.default.createElement(_components.IconButton, {
				icon: 'admin-settings',
				label: 'Form Settings',
				className: 'form-list-item form-list-item-settings',
				onClick: function onClick() {
					onFormAction(form.id, 'settings');
				}
			})
		)
	);
};

FormListItem.defaultProps = {
	classNames: {
		edit: 'form-list-item-edit',
		'view-entries': 'form-list-item-view-entries',
		preview: 'form-list-item-preview',
		settings: 'form-list-item-settings'
	}
};
FormListItem.propTypes = {
	form: _propTypes2.default.object,
	onFormAction: _propTypes2.default.func.isRequired
};