'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FormListSort = exports.SORT_FORMS_BY_UPDATE = exports.SORT_FORMS_BY_NAME = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = require('@caldera-labs/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SORT_FORMS_BY_NAME = exports.SORT_FORMS_BY_NAME = 'name';
var SORT_FORMS_BY_UPDATE = exports.SORT_FORMS_BY_UPDATE = '_last_updated';

/**
 * Form list sort and search controls.
 *
 * @param props
 * @return {*}
 * @constructor
 */
var FormListSort = exports.FormListSort = function FormListSort(props) {

	var sortOptions = {
		id: 'cf-form-sort-options',
		label: 'Sort Forms By',
		desc: '',
		type: 'select',
		inputClass: FormListSort.classNames.order,
		value: props.order,
		options: [{
			value: SORT_FORMS_BY_NAME,
			label: 'Name'
		}, {
			value: SORT_FORMS_BY_UPDATE,
			label: 'Last Update'
		}],
		onValueChange: function onValueChange(event) {
			props.onChangeOrder(event.target.value);
		}
	};
	var searchField = {
		id: 'cf-form-search',
		label: 'Search Forms By',
		desc: '',
		type: 'input',
		innerType: 'search',
		inputClass: FormListSort.classNames.search,
		value: props.formSearchTerm,
		onValueChange: function onValueChange(newValue) {
			props.onFormSearch(newValue);
		}
	};
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_components.RenderGroup, {
			configFields: [searchField, sortOptions],
			className: 'caldera-forms-admin-list-sort'
		})
	);
};

FormListSort.propTypes = {
	order: _propTypes2.default.oneOf([SORT_FORMS_BY_NAME, SORT_FORMS_BY_UPDATE]),
	onChangeOrder: _propTypes2.default.func,
	formSearchTerm: _propTypes2.default.string,
	onFormSearch: _propTypes2.default.func

};

FormListSort.defaultProps = {
	order: SORT_FORMS_BY_NAME
};

FormListSort.classNames = {
	order: 'order-forms-select',
	search: 'search-froms'
};