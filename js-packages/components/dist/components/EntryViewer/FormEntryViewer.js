"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FormEntryViewer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDataGrid = require("react-data-grid");

var _reactDataGrid2 = _interopRequireDefault(_reactDataGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import "./styles.css";


var FormEntryViewer = exports.FormEntryViewer = function (_React$Component) {
	_inherits(FormEntryViewer, _React$Component);

	function FormEntryViewer(props) {
		_classCallCheck(this, FormEntryViewer);

		var _this = _possibleConstructorReturn(this, (FormEntryViewer.__proto__ || Object.getPrototypeOf(FormEntryViewer)).call(this, props));

		_this.state = { rows: [], columns: [] };

		_this.setColumnsAndRows = function () {
			var _this$props = _this.props,
			    entries = _this$props.entries,
			    form = _this$props.form;

			if (!form || !form.fields) {
				return;
			}
			var columns = [];
			var rows = [];
			var defaultColumnProperties = {
				resizable: true,
				width: 120
			};
			Object.values(form.fields).forEach(function (field) {
				columns.push(_extends({}, defaultColumnProperties, { key: field.id, name: field.label, editable: false }));
			});

			function findEntryValue(entry, field) {
				return Object.values(entry.entryValues).find(function (entryValueField) {
					return field.key === entryValueField.fieldId;
				});
			}

			Object.values(entries).forEach(function (entry) {
				var entryId = entry.id;
				var row = {
					key: entryId
				};
				columns.forEach(function (field) {

					var entryValue = findEntryValue(entry, field);
					if (entryValue) {
						row[field.key] = entryValue.value;
					}
				});
				rows.push(row);
			});

			_this.setState({ rows: rows, columns: columns });
		};

		_this.rowCount = function () {
			return _this.state.rows.length;
		};

		return _this;
	}

	_createClass(FormEntryViewer, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.setColumnsAndRows();
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    form = _props.form,
			    noItemsMessage = _props.noItemsMessage;
			var columns = this.state.columns;

			if (form && form.fields) {
				return _react2.default.createElement(_reactDataGrid2.default, {
					columns: columns,
					rowGetter: function rowGetter(i) {
						return _this2.state.rows[i];
					},
					rowsCount: this.rowCount(),
					enableCellSelect: true
				});
			} else {
				return _react2.default.createElement(
					"div",
					{ className: 'has-error' },
					noItemsMessage
				);
			}
		}
	}]);

	return FormEntryViewer;
}(_react2.default.Component);