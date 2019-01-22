/**
 * Create a conditional rule
 *
 * @param type
 * @param fieldId
 * @param testValue
 * @return {function(*=): boolean}
 */
export const createFieldRule = (type,fieldId,testValue) => {
	const findFieldValue= (fieldId,fieldValues) => {
		return fieldValues.hasOwnProperty(fieldId)
			?fieldValues[fieldId]
			: null;
	};


	switch(type){
		case 'is':
			return (fieldValues) => {
				const value = findFieldValue(fieldId,fieldValues);
				return value == testValue;
			};
		case 'not':
			return (fieldValues) => {
				const value = findFieldValue(fieldId,fieldValues);
				return value !== testValue;
			}

	};
}
