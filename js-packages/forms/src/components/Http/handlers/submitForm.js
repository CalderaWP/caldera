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
	const url = `${apiRootUri}/${formId}`;
	return fetch(url,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				fieldValues
			})
		}
	);
}
