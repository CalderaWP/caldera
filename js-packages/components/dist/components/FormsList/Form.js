'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Form = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ShortcodeViewer = require('./ShortcodeViewer');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import {Button} from '@wordpress/components'

/**
 * Show one form in the FormList
 */
var Form = exports.Form = function (_PureComponent) {
	_inherits(Form, _PureComponent);

	/**
  * Create Form component
  *
  * @param props
  */
	function Form(props) {
		_classCallCheck(this, Form);

		var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

		_this.state = {
			showShortcode: false
		};

		_this.toggleShortcodeView = _this.toggleShortcodeView.bind(_this);
		_this.getEntriesCount = _this.getEntriesCount.bind(_this);
		_this.openEntryViewerForForm = _this.openEntryViewerForForm.bind(_this);
		return _this;
	}

	/**
  * Open or close the shortcode view
  */


	_createClass(Form, [{
		key: 'toggleShortcodeView',
		value: function toggleShortcodeView() {
			this.setState({ showShortcode: !this.state.showShortcode });
		}

		/**
   * Get the entries count
   *
   * Returns false if disabled
   * @return {Number|Boolean}
   */

	}, {
		key: 'getEntriesCount',
		value: function getEntriesCount() {
			if (!this.props.form.hasOwnProperty('entries') || !this.props.form.entries.hasOwnProperty('count')) {
				return false;
			}
			return parseInt(this.props.form.entries.count, 10);
		}

		/**
   * Dispatch action to open entry viewer for one form
   */

	}, {
		key: 'openEntryViewerForForm',
		value: function openEntryViewerForForm() {
			this.props.openEntryViewerForForm(this.props.form.ID);
		}

		/**
   * Render Form list item
   * @return {*}
   */

	}, {
		key: 'render',
		value: function render() {

			var activeForm = this.props.form.hasOwnProperty('form_draft') ? this.props.form.form_draft : false;
			return _react2.default.createElement(
				'tr',
				{
					id: 'form_row_' + this.props.form.ID,
					className: (0, _classnames2.default)({
						alternate: this.props.isAlternate,
						form_entry_row: true
					})
				},
				_react2.default.createElement(
					'td',
					{
						className: (0, _classnames2.default)({ 'active-form': activeForm })
					},
					!this.state.showShortcode && _react2.default.createElement(
						'span',
						{ className: 'cf-form-name-preview' },
						this.props.form.name
					),
					_react2.default.createElement(
						'span',
						{ className: 'cf-form-view-shorcode' },
						_react2.default.createElement(_ShortcodeViewer.ShortcodeViewer, {
							formId: this.props.form.ID,
							onButtonClick: this.toggleShortcodeView,
							show: this.state.showShortcode
						})
					),
					_react2.default.createElement(
						'span',
						{ className: 'row-actions' },
						_react2.default.createElement(
							'span',
							{ className: 'edit' },
							_react2.default.createElement(
								'a',
								{
									href: '' + this.props.form.editLink
								},
								'Edit'
							),
							false !== this.getEntriesCount() && _react2.default.createElement(
								'button',
								{
									className: Form.classNames.entryButton,
									onClick: this.openEntryViewerForForm
								},
								'View Entries'
							)
						)
					)
				),
				_react2.default.createElement(
					'td',
					{
						style: {
							width: '4em',
							textAign: 'center'
						},
						className: 'entry_count_' + this.props.form.ID
					},
					false === this.getEntriesCount() && _react2.default.createElement(
						_react2.default.Fragment,
						null,
						'Disabled'
					),
					false !== this.getEntriesCount() && _react2.default.createElement(
						_react2.default.Fragment,
						null,
						this.getEntriesCount()
					)
				)
			);
		}
	}]);

	return Form;
}(_react.PureComponent);

/**
 * Prop definitions for form component
 *
 * @type {{form: *, onFormUpdate: *, openEntryViewerForForm: shim}}
 */


Form.propTypes = {
	isAlternate: _propTypes2.default.bool,
	form: _propTypes2.default.object.isRequired,
	onFormUpdate: _propTypes2.default.func.isRequired,
	openEntryViewerForForm: _propTypes2.default.func.isRequired
};

Form.classNames = {
	isAlternate: false,
	entryButton: 'view-entry-button'
};