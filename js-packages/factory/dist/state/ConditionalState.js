"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Describes the state of a form or other collection of fields where some fields may be hidden or disabled.
 *
 * The method getCurrentState() provides the current values of all VISIBLE fields.
 * 	- A hidden field's value can NOT be accessed or updated.
 * 	- A disabled field's value can NOT be update. It can be accessed.
 */
var ConditionalState = exports.ConditionalState = function ConditionalState(initialState) {
	var _this = this;

	var fieldsHidden = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	var fieldsDisabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

	_classCallCheck(this, ConditionalState);

	this.getCurrentState = function () {
		var state = {}; //Must return a new object each time.
		_this.allowedFields.forEach(function (fieldId) {
			if (!_this.isFieldHidden(fieldId)) {
				state[fieldId] = _this.getValue(fieldId);
			}
		});
		return state;
	};

	this.setState = function (newState) {
		Object.keys(newState).forEach(function (stateKey) {
			if (_this.isValidField(stateKey) && !_this.isFieldDisabled(stateKey)) {
				_this.actualState[stateKey] = newState[stateKey];
			}
		});
		return _this.getCurrentState();
	};

	this.getValue = function (fieldId) {
		if (_this.isValidField(fieldId) && !_this.isFieldHidden(fieldId) && _this.actualState.hasOwnProperty(fieldId)) {
			return _this.actualState[fieldId];
		}
		return null;
	};

	this.setValue = function (fieldId, value) {
		if (_this.isValidField(fieldId) && !_this.isFieldDisabled(fieldId)) {
			_this.actualState[fieldId] = value;
		}
		return _this.getCurrentState();
	};

	this.isValidField = function (fieldId) {
		return _this.allowedFields.includes(fieldId);
	};

	this.hideField = function (fieldId) {
		if (_this.isValidField(fieldId)) {
			_this.fieldsHidden.push(fieldId);
		}
		return _this.getCurrentState();
	};

	this.showField = function (fieldId) {
		if (_this.isValidField(fieldId)) {
			_this.fieldsHidden = _this.fieldsHidden.filter(function (hiddenFieldId) {
				return hiddenFieldId !== fieldId;
			});
		}
		return _this.getCurrentState();
	};

	this.isFieldHidden = function (fieldId) {
		return _this.isValidField(fieldId) && _this.fieldsHidden.includes(fieldId);
	};

	this.disableField = function (fieldId) {
		if (_this.isValidField(fieldId)) {
			_this.fieldsDisabled.push(fieldId);
		}
		return _this.getCurrentState();
	};

	this.enableField = function (fieldId) {
		if (_this.isValidField(fieldId)) {
			_this.fieldsDisabled = _this.fieldsDisabled.filter(function (disabledFieldId) {
				return disabledFieldId !== fieldId;
			});
		}
		return _this.getCurrentState();
	};

	this.isFieldDisabled = function (fieldId) {
		return _this.isValidField(fieldId) && _this.fieldsDisabled.includes(fieldId);
	};

	this.allowedFields = Object.keys(initialState);
	this.actualState = initialState;
	this.fieldsHidden = fieldsHidden;
	this.fieldsDisabled = fieldsDisabled;
}

/**
 * The values of all visible fields
 */


/**
 * Reset state
 *
 * @param newState
 */


/**
 * Get the value of a visible field
 *
 * @param {string} fieldId
 * @return {*}
 */


/**
 * Set the value of a visible and enabled field
 *
 * @param {string} fieldId
 *
 * @param value
 */


/**
 * Does this fieldId represent the ID of a field managed by this collection?
 *
 * @param {string} fieldId
 * @return {boolean}
 */


/**
 * Hide a field
 *
 * @param {string} fieldId
 */


/**
 * Show a field
 *
 * @param {string} fieldId
 */


/**
 * Does this fieldId represent the ID of a field that is currently hidden?
 *
 * @param fieldId
 * @return {boolean}
 */


/**
 * Disable a field
 *
 * @param {string} fieldId
 */


/**
 * Enable a field
 *
 * @param {string} fieldId
 */


/**
 * Does this fieldId represent the ID of a field that is currently disabled?
 *
 * @param fieldId
 * @return {boolean}
 */
;