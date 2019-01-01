"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = submitForm;
/**
 * Default form submission handler
 *
 * @param fieldValues
 * @param eventOptions
 * @param fetch
 * @return {*}
 */
function submitForm(fieldValues, eventOptions, fetch) {
	var apiRootUri = eventOptions.apiRootUri,
	    formId = eventOptions.formId;

	var entryValues = [];
	Object.keys(fieldValues).forEach(function (fieldId) {
		entryValues.push({
			fieldId: fieldValues[fieldId]
		});
	});
	var url = apiRootUri + "/v1/entries";
	return fetch(url, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			formId: formId,
			entryValues: fieldValues
		})
	});
}