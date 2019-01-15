'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.notFormRows = exports.notFormRow = exports.formRows = exports.formRowTwo = exports.formRowOne = undefined;

var _fields = require('./fields.fixtures');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formRowOne = exports.formRowOne = {
	rowId: 'r1',
	columns: [{
		fields: [_fields.emailField],
		width: '1/2',
		columnId: '1a'
	}, {
		fields: [_fields.textField],
		width: '1/4',
		columnId: '1b'
	}]
};

var formRowTwo = exports.formRowTwo = {
	rowId: 'r2',
	columns: [{
		fields: [_fields.checkboxField, _fields.selectField],
		width: '1/2',
		columnId: 1
	}, {
		fields: [_fields.radioField],
		width: '1/4',
		columnId: 2
	}]
};

var formRows = exports.formRows = [formRowOne, formRowTwo];

var notFormRow = exports.notFormRow = {
	rowId: 'notForm',
	columns: [{
		children: _react2.default.createElement(
			'div',
			null,
			'Half Column'
		),
		width: '1/2',
		columnId: 1
	}, {
		children: _react2.default.createElement(
			'div',
			null,
			'Quarter Column'
		),
		width: '1/4',
		columnId: 2
	}, {
		children: _react2.default.createElement(
			'div',
			null,
			'Quarter Column 2'
		),
		width: '1/4',
		columnId: 3
	}]
};

var notFormRows = exports.notFormRows = [notFormRow];