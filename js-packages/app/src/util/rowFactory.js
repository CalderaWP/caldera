const uuidv1 = require('uuid/v1');
export default function rowFactory(columns = [],rowId=null) {
	rowId = ! rowId ? uuidv1() : rowId;
	return {
		rowId,
		columns
	}
}
