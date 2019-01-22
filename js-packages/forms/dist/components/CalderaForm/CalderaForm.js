'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CalderaForm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ConditionalState = require('./state/ConditionalState');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formik = require('formik');

var _updateRows = require('./util/updateRows');

var _factory = require('@calderawp/factory');

var _applyRule = require('./state/applyRule');

var _CalderaGrid = require('./CalderaGrid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CalderaForm = exports.CalderaForm = function (_Component) {
	_inherits(CalderaForm, _Component);

	function CalderaForm() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, CalderaForm);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CalderaForm.__proto__ || Object.getPrototypeOf(CalderaForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			formRows: [],
			initialValues: {},
			conditionalState: null
		}, _this.applyConditionalRules = function () {
			var _this$props$form = _this.props.form,
			    fields = _this$props$form.fields,
			    rows = _this$props$form.rows,
			    conditionals = _this$props$form.conditionals;

			if (conditionals && conditionals.length) {
				var conditionalState = _this.state.conditionalState ? _this.state.conditionalState : new _ConditionalState.ConditionalState((0, _factory.collectFieldValues)(fields));
				conditionals.forEach(function (rule) {
					(0, _applyRule.applyRuleToState)(rule, conditionalState);
				});
				_this.setState({
					formRows: (0, _updateRows.updateRows)(conditionalState, rows, fields),
					conditionalState: conditionalState
				});
			}
		}, _this.componentDidMount = function () {
			var _this$props$form2 = _this.props.form,
			    fields = _this$props$form2.fields,
			    rows = _this$props$form2.rows;

			var intialValues = (0, _factory.collectFieldValues)(fields);
			var conditionalState = _this.state.conditionalState ? _this.state.conditionalState : new _ConditionalState.ConditionalState(intialValues);
			var formRows = (0, _updateRows.updateRows)(conditionalState, rows, fields);
			_this.setState({ intialValues: intialValues, formRows: formRows, conditionalState: conditionalState });
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(CalderaForm, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    onSubmit = _props.onSubmit,
			    onChange = _props.onChange;
			var _state = this.state,
			    formRows = _state.formRows,
			    initialValues = _state.initialValues,
			    conditionalState = _state.conditionalState;


			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_formik.Formik, {
					initialValues: initialValues,
					onSubmit: onSubmit,
					render: function render(_ref2) {
						var errors = _ref2.errors,
						    status = _ref2.status,
						    touched = _ref2.touched,
						    isSubmitting = _ref2.isSubmitting,
						    handleChange = _ref2.handleChange,
						    handleBlur = _ref2.handleBlur,
						    setFieldValue = _ref2.setFieldValue,
						    values = _ref2.values;
						return _react2.default.createElement(
							_formik.Form,
							null,
							_react2.default.createElement(_CalderaGrid.CalderaGrid, {
								applyConditionalRules: _this2.applyConditionalRules,
								conditionalState: conditionalState,
								rows: formRows,
								onAnyChange: onChange,
								onAnyBlur: handleBlur,
								fieldValues: values,
								setFieldValue: setFieldValue,
								fieldErrors: errors,
								fieldTouched: touched
							}),
							_react2.default.createElement('input', {
								type: 'submit',
								className: 'caldera-forms-submit',
								disabled: isSubmitting,
								value: 'Click Button'
							})
						);
					}
				})
			);
		}
	}]);

	return CalderaForm;
}(_react.Component);

CalderaForm.propTypes = {
	form: _propTypes2.default.object,
	onSubmit: _propTypes2.default.func,
	onChange: _propTypes2.default.func,
	onBlur: _propTypes2.default.func
};

var noop = function noop() {};
CalderaForm.defaultProps = {
	onChange: noop,
	onBlur: noop
};