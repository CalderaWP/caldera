import {collectFieldValues} from "@caldera-labs/factory";

export const getValuesFromFormLayout = (rows) => {
	let values=  {

	};
	rows.map( formRow => {
		const {
			columns
		} = formRow;
		columns.map( column => {
			const {
				fields
			} = column;
			values = {
				...values,
				...collectFieldValues(fields)
			}
		});

	});
	return values;
};
