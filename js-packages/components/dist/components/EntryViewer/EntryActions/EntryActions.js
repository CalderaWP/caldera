'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.EntryActions = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EntryActions = exports.EntryActions = function EntryActions(_ref) {
	var entryId = _ref.entryId,
	    formId = _ref.formId,
	    actions = _ref.actions,
	    onAction = _ref.onAction;


	return _react2.default.createElement(
		_react.Fragment,
		null,
		actions.map(function (ActionComponent) {
			var _ActionComponent$prop = ActionComponent.props,
			    actionKey = _ActionComponent$prop.actionKey,
			    onClick = _ActionComponent$prop.onClick;

			return _react2.default.createElement(ActionComponent, {
				key: actionKey,
				onClick: function onClick() {
					onAction(formId, entryId, actionKey);
				}
			});
		})
	);
};

EntryActions.propTypes = {
	formId: _propTypes2.default.string.isRequired,
	entryId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
	actions: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node])),
	onAction: _propTypes2.default.func

};

EntryActions.defaultProps = {
	required: false,
	multiple: false
};