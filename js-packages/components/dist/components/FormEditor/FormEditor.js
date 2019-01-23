'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FormEditor = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Processors = require('./Processors/Processors');

var _components = require('@wordpress/components');

var _factory = require('@calderawp/factory');

var _propTypes3 = require('./propTypes');

var _MainSection = require('./MainSection');

var _defaultProcessorTypes = require('./Processors/processorTypes/defaultProcessorTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormEditor = exports.FormEditor = function (_Component) {
	_inherits(FormEditor, _Component);

	function FormEditor() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, FormEditor);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormEditor.__proto__ || Object.getPrototypeOf(FormEditor)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			activeTab: 'processors',
			newProcessorType: '' //the next processor to be created will use this type
		}, _this.onSetTab = function (activeTab) {
			_this.setState({ activeTab: activeTab });
		}, _this.updateProcessors = function (processors) {
			var _this$props = _this.props,
			    updateForm = _this$props.updateForm,
			    form = _this$props.form;

			updateForm(_extends({}, form, {
				processors: processors
			}));
		}, _this.getFormProcessors = function () {
			var form = _this.props.form;

			return form.processors ? form.processors : [];
		}, _this.getFormFields = function () {
			var form = _this.props.form;

			return form.fields ? form.fields : [];
		}, _this.tabs = [{
			name: 'editor',
			title: 'Layout',
			className: 'caldera-forms-editor-layout-tab-btn',
			classNameForComponent: 'caldera-forms-editor-layout'
		}, {
			name: 'processors',
			title: 'Processors',
			className: 'caldera-forms-editor-processors-tab-btn',
			classNameForComponent: 'caldera-forms-editor-processors'

		}, {
			name: 'Mailer',
			title: 'mailer',
			className: 'caldera-forms-editor-mailer-tab-btn',
			classNameForComponent: 'caldera-forms-editor-mailer'
		}, {
			name: 'settings',
			title: 'Settings',
			className: 'caldera-forms-editor-settings-tab-btn',
			classNameForComponent: 'caldera-forms-editor-settings'

		}], _this.setNewProcessorType = function (newProcessorType) {
			return _this.setState({ newProcessorType: newProcessorType });
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(FormEditor, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    form = _props.form,
			    processorTypes = _props.processorTypes,
			    updateForm = _props.updateForm;

			var theProcessorTypes = [].concat(_toConsumableArray(processorTypes), _toConsumableArray(_defaultProcessorTypes.defaultProcessorTypes));
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_factory.Row,
					null,
					_react2.default.createElement(
						_factory.Column,
						null,
						_react2.default.createElement(
							'p',
							null,
							form.name
						)
					)
				),
				_react2.default.createElement(
					_components.TabPanel,
					{
						className: 'caldera-processor',
						activeClass: 'active-tab',
						onSelect: this.onSetTab,
						initialTabName: 'processors',
						tabs: this.tabs
					},
					function (tab) {
						var name = tab.name,
						    classNameForComponent = tab.classNameForComponent,
						    title = tab.title;

						if ('processors' === name) {
							return _react2.default.createElement(
								_MainSection.MainSection,
								{
									className: classNameForComponent,
									title: title
								},
								_react2.default.createElement(_Processors.Processors, {
									processorTypes: theProcessorTypes,
									processors: _this2.getFormProcessors(),
									form: form,
									formFields: _this2.getFormFields(),
									updateProcessors: _this2.updateProcessors
								})
							);
						}
						if ('settings' === name) {
							var nameField = {
								fieldType: 'text',
								value: form.name,
								label: 'Form Name',
								fieldId: 'formName',
								required: true
							};
							return _react2.default.createElement(
								_MainSection.MainSection,
								{
									className: classNameForComponent,
									title: title
								},
								(0, _factory.fieldAreaFactory)(nameField, function (name) {
									updateForm(_extends({}, form, {
										name: name
									}));
								})
							);
						}
						return _react2.default.createElement(
							_MainSection.MainSection,
							{
								className: classNameForComponent,
								title: title
							},
							tab.title
						);
					}
				)
			);
		}
	}]);

	return FormEditor;
}(_react.Component);

FormEditor.propTypes = {
	processorsTypes: _propTypes3.processorTypesPropType,
	updateForm: _propTypes2.default.func,
	form: _propTypes2.default.shape({
		id: _propTypes2.default.string,
		name: _propTypes2.default.string,
		fields: _propTypes2.default.array,
		conditionals: _propTypes2.default.array,
		settings: _propTypes2.default.array,
		processors: _Processors.processorsCollectionPropType
	})
};

FormEditor.defaultProps = {};