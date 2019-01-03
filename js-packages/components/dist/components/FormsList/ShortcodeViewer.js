'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ShortcodeViewer = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Show shortcode viewer UI
 * @param props
 * @return {*}
 * @constructor
 */
var ShortcodeViewer = exports.ShortcodeViewer = function ShortcodeViewer(props) {
	if (true === props.show) {
		return _react2.default.createElement(
			'span',
			null,
			_react2.default.createElement(
				'span',
				null,
				'[caldera_forms="',
				props.formId,
				'"]'
			),
			_react2.default.createElement(
				'button',
				{
					className: 'button cf-form-shortcode-preview-button',
					onClick: props.onButtonClick
				},
				'Close'
			)
		);
	}
	return _react2.default.createElement(
		'button',
		{
			className: 'button cf-form-shortcode-preview-button',
			onClick: props.onButtonClick
		},
		'Get Shortcode'
	);
};

ShortcodeViewer.propTypes = {
	formId: _propTypes2.default.string.isRequired,
	onButtonClick: _propTypes2.default.func.isRequired,
	show: _propTypes2.default.bool
};

ShortcodeViewer.defaultProps = {
	show: false
};