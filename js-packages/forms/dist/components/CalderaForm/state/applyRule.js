'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.applyRuleToState = exports.applyRule = undefined;

var _ConditionalState = require('./ConditionalState');

var applyRule = exports.applyRule = function applyRule(rule, fieldValues) {
	return rule.rule(fieldValues);
};

/**
 *
 * @param {{
 *     type: String,
 *     fields: Array
 * }} rule
 * @param {ConditionalState} conditionalState
 *
 * @return {ConditionalState}
 */
var applyRuleToState = exports.applyRuleToState = function applyRuleToState(rule, conditionalState) {
	var type = rule.type,
	    fields = rule.fields;

	var passed = applyRule(rule, conditionalState.getCurrentState());
	switch (type) {
		case 'hide':
			fields.forEach(function (field) {
				if (passed) {
					conditionalState.hideField(field);
				} else {
					conditionalState.showField(field);
				}
			});
			break;
		case 'show':
			fields.forEach(function (field) {
				if (!passed) {
					conditionalState.hideField(field);
				} else {
					conditionalState.showField(field);
				}
			});
			break;
		case 'enable':
			fields.forEach(function (field) {
				if (passed) {
					conditionalState.enableField(field);
				} else {
					conditionalState.disableField(field);
				}
			});
			break;
		case 'disable':
			fields.forEach(function (field) {
				if (!passed) {
					conditionalState.enableField(field);
				} else {
					conditionalState.disableField(field);
				}
			});
			break;
	}
	return conditionalState;
};