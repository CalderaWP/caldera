const uuidv1 = require('uuid/v1');

export default function columnFactory(fields = [], columnId=null ) {
	columnId = ! columnId ? uuidv1() : columnId;
	return {
		columnId,
		fields
	}
}
