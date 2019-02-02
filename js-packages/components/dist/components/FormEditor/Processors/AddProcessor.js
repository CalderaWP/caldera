'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AddProcessor = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _factory = require('../../../factory');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddProcessor = exports.AddProcessor = function AddProcessor(_ref) {
	var setNewProcessorType = _ref.setNewProcessorType,
	    processorTypes = _ref.processorTypes,
	    onCreate = _ref.onCreate,
	    children = _ref.children,
	    value = _ref.value;

	var options = [{
		value: null,
		label: '--'
	}];

	processorTypes.map(function (processorType) {
		options.push({
			value: processorType.type,
			label: processorType.type
		});
	});

	var processorTypesField = {
		fieldType: 'select',
		label: 'Processor Type',
		fieldId: 'newProcessorType',
		required: true,
		options: options,
		onChange: setNewProcessorType,
		value: value
	};

	return _react2.default.createElement(
		_react.Fragment,
		null,
		(0, _factory.fieldAreaFactory)(processorTypesField, setNewProcessorType),
		_react2.default.createElement(
			'button',
			{ onClick: onCreate,
				disabled: !value
			},
			children
		)
	);
};

AddProcessor.propTypes = {
	processorTypes: _propTypes2.default.array,
	onCreate: _propTypes2.default.func,
	setNewProcessorType: _propTypes2.default.func,
	value: _propTypes2.default.string
};

AddProcessor.defaultProps = {
	processorTypes: [],
	value: ''
};