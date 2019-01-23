'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Processor = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HorizontalForm = require('../../HorizontalForm/HorizontalForm');

var _components = require('@wordpress/components');

var _factory = require('@calderawp/factory');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Processor = exports.Processor = function (_Component) {
	_inherits(Processor, _Component);

	function Processor() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Processor);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Processor.__proto__ || Object.getPrototypeOf(Processor)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			activeTab: 'settings'
		}, _this.onSetTab = function (activeTab) {
			_this.setState({ activeTab: activeTab });
		}, _this.tabs = [{
			name: 'settings',
			title: 'Settings',
			className: 'caldera-processor-settings-tab-btn'
		}, {
			name: 'conditionals',
			title: 'Conditionals',
			className: 'caldera-processor-conditionals-tab-btn'
		}], _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Processor, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    onClose = _props.onClose,
			    onRemove = _props.onRemove;

			return _react2.default.createElement(
				_react.Fragment,
				null,
				_react2.default.createElement(
					_factory.Row,
					null,
					_react2.default.createElement(
						_components.TabPanel,
						{
							className: 'caldera-processor',
							activeClass: 'active-tab',
							onSelect: this.onSetTab,
							initialTabName: 'settings',
							tabs: this.tabs
						},
						function () {
							var activeTab = _this2.state.activeTab;

							var tab = _this2.tabs.find(function (t) {
								return t.name === activeTab;
							});
							var name = tab.name;

							if ('settings' === name) {
								return _react2.default.createElement(_HorizontalForm.HorizontalForm, _extends({}, _this2.props, {
									className: 'caldera-processor-settings'
								}));
							}
							return _react2.default.createElement(
								'div',
								{
									className: 'caldera-processor-conditionals'
								},
								'Conditionals'
							);
						}
					)
				),
				_react2.default.createElement(
					_factory.Row,
					null,
					_react2.default.createElement(
						_factory.Column,
						{ width: '1/2' },
						_react2.default.createElement(
							'button',
							{
								className: 'caldera-processor-close',
								onClick: onClose },
							'Close'
						)
					),
					_react2.default.createElement(
						_factory.Column,
						{ width: '1/2' },
						_react2.default.createElement(
							'button',
							{
								className: 'caldera-processor-remove',
								onClick: onRemove },
							'Remove'
						)
					)
				)
			);
		}
	}]);

	return Processor;
}(_react.Component);

//should have label!


Processor.propTypes = _extends({}, _HorizontalForm.HorizontalForm.propTypes, {
	initialActiveTab: _propTypes2.default.string,
	onRemove: _propTypes2.default.func,
	type: _propTypes2.default.string,
	id: _propTypes2.default.string
});

Processor.defaultProps = _extends({}, _HorizontalForm.HorizontalForm.defaultProps, {
	initialActiveTab: 'settings'
});