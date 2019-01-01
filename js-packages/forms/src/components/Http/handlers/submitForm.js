/**
 * Default form submission handler
 *
 * @param fieldValues
 * @param eventOptions
 * @param fetch
 * @return {*}
 */
export default function submitForm(fieldValues,eventOptions,fetch) {
	const {
		apiRootUri,
		formId
	} = eventOptions;
	const entryValues = [];
	Object.keys(fieldValues).forEach(fieldId => {
		entryValues.push({
			fieldId:fieldValues[fieldId]
		})
	});
	const url = `${apiRootUri}/v1/entries`;
	return fetch(url,
		{
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				formId,
				entryValues:fieldValues
			})
		}
	);
}
