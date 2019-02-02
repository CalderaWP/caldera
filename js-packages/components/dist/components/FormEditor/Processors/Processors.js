'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.processorsCollectionPropType = exports.Processors = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Processor = require('./Processor');

var _factory = require('../../../factory');

var _processorTypesPropType = require('./processorTypesPropType');

var _processorFactory = require('./processorTypes/processorFactory');

var _processorFactory2 = _interopRequireDefault(_processorFactory);

var _AddProcessor = require('./AddProcessor');

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
			activeProcessorId: '',
			newProcessorType: ''
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
		}, _this.handleCreateProcessor = function () {
			var _this$props3 = _this.props,
			    processors = _this$props3.processors,
			    updateProcessors = _this$props3.updateProcessors;
			var _this$state = _this.state,
			    activeProcessor = _this$state.activeProcessor,
			    newProcessorType = _this$state.newProcessorType;

			var newProcessor = (0, _processorFactory2.default)(newProcessorType);
			var id = newProcessor.id;

			updateProcessors([].concat(_toConsumableArray(processors), [newProcessor]));
			_this.setState({ activeProcessorId: id, newProcessorType: '' });
		}, _this.setNewProcessorType = function (newProcessorType) {
			return _this.setState({ newProcessorType: newProcessorType });
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


	/**
  * When a processor is added, create send update list to change handler
 	 */


	/**
  * Set the type of the next processor to be created
  *
  * @param newProcessorType
  * @return {*}
  */


	_createClass(Processors, [{
		key: 'render',


		/** @inheritDoc **/
		value: function render() {
			var _this2 = this;

			var _state = this.state,
			    activeProcessor = _state.activeProcessor,
			    newProcessorType = _state.newProcessorType;
			var _props = this.props,
			    processors = _props.processors,
			    processorTypes = _props.processorTypes,
			    form = _props.form;

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
						    label = processor.label,
						    conditionals = processor.conditionals;

						if (_this2.isActiveProcessor(id)) {
							return _react2.default.createElement(
								_react.Fragment,
								{ key: id },
								_react2.default.createElement(_Processor.Processor, {
									form: form,
									className: 'caldera-forms-active-processor-' + id,
									fields: fields,
									conditionals: conditionals,
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
							_factory.Row,
							{ key: id },
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
				),
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						_AddProcessor.AddProcessor,
						{
							setNewProcessorType: this.setNewProcessorType,
							processorTypes: processorTypes,
							value: newProcessorType,
							onCreate: this.handleCreateProcessor
						},
						'Add ',
						!newProcessorType ? '' : newProcessorType,
						' Processor'
					)
				)
			);
		}
	}]);

	return Processors;
}(_react.Component);

var processorsCollectionPropType = exports.processorsCollectionPropType = _propTypes2.default.arrayOf(_propTypes2.default.shape({
	id: _propTypes2.default.string,
	label: _propTypes2.default.string,
	type: _propTypes2.default.string,
	fields: _propTypes2.default.array,
	config: _propTypes2.default.object
}));

Processors.propTypes = {
	processorTypes: _processorTypesPropType.processorTypesPropType,
	processors: processorsCollectionPropType,
	updateProcessors: _propTypes2.default.func,
	form: _propTypes2.default.object,
	formFields: _propTypes2.default.array
};

Processors.defaultProps = {
	processors: [],
	processorTypes: []
};