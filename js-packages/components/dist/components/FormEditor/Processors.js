'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Processors = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Processor = require('./Processor');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Processors = exports.Processors = function (_Component) {
	_inherits(Processors, _Component);

	function Processors() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Processors);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Processors.__proto__ || Object.getPrototypeOf(Processors)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			activeProcessorId: ''
		}, _this.setActive = function (activeProcessorId) {
			_this.setState({ activeProcessorId: activeProcessorId });
		}, _this.isActiveProcessor = function (processorId) {
			var activeProcessorId = _this.state.activeProcessorId;

			return activeProcessorId && processorId === activeProcessorId;
		}, _this.handleProcessorChange = function (processorId, updatedProcessor) {
			var _this$props = _this.props,
			    processors = _this$props.processors,
			    updateProcessors = _this$props.updateProcessors;

			var processorIndex = processors.findIndex(function (processor) {
				return processorId === processor.id;
			});
			if (-1 !== processorIndex) {
				var processor = processors[processorIndex];
				var update = [].concat(_toConsumableArray(processors.splice(processorIndex - 1, 1)), [_extends({}, processor, updatedProcessor)]);
				updateProcessors(update);
			}
		}, _this.handleRemoveProcessor = function (processorId) {
			var _this$props2 = _this.props,
			    processors = _this$props2.processors,
			    updateProcessors = _this$props2.updateProcessors;

			updateProcessors([].concat(_toConsumableArray(processors.filter(function (processor) {
				return processorId !== processor.id;
			}))));
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	/**
  * Set which processor is active
  * @param activeProcessorId
  */


	/**
  * Check if a processor is active by ID
  * @param processorId
  * @return {string|boolean}
  */


	/**
  * When a change in value for a processor is received, send all processors up.
  *
  * @param processorId
  * @param updatedProcessor
  */


	/**
  * When a processor is removed, send updated list to change handler.
  *
  * @param processorId
  */


	_createClass(Processors, [{
		key: 'render',


		/** @inheritDoc **/
		value: function render() {
			var _this2 = this;

			var activeProcessor = this.state.activeProcessor;
			var processors = this.props.processors;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					null,
					processors.map(function (processor) {
						var id = processor.id,
						    fields = processor.fields,
						    config = processor.config,
						    type = processor.type,
						    label = processor.label;

						if (_this2.isActiveProcessor(id)) {

							return _react2.default.createElement(
								_react.Fragment,
								{ key: id },
								_react2.default.createElement(_Processor.Processor, {
									className: 'caldera-forms-active-processor-' + id,
									fields: fields,
									initialValues: config,
									label: label,
									type: type,
									onChange: function onChange(fieldValues) {
										return _this2.handleProcessorChange(id, fieldValues);
									},
									onRemove: function onRemove() {
										return _this2.handleRemoveProcessor(id);
									},
									onClose: function onClose() {
										return _this2.setActive('');
									}
								})
							);
						}
						return _react2.default.createElement(
							_react.Fragment,
							null,
							_react2.default.createElement(
								'button',
								{
									className: 'caldera-forms-choose-processor caldera-forms-choose-processor-' + id,
									onClick: function onClick() {
										return _this2.setActive(id);
									}
								},
								label ? label : type
							)
						);
					})
				)
			);
		}
	}]);

	return Processors;
}(_react.Component);

Processors.propTypes = {
	processors: _propTypes2.default.arrayOf(_propTypes2.default.shape({
		id: _propTypes2.default.string,
		label: _propTypes2.default.string,
		type: _propTypes2.default.string,
		fields: _propTypes2.default.array,
		config: _propTypes2.default.object
	})),
	updateProcessors: _propTypes2.default.func,
	form: _propTypes2.default.object,
	formFields: _propTypes2.default.object
};

Processors.defaultProps = {
	processors: []
};