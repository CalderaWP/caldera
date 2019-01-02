import FormListComponents from './index';
import {snapshotObjectKeysAndTypes} from "../../../../../../Downloads/caldera-admin-master/src/testUtil/snapshotObjectKeysAndTypes";

describe( 'Form List components export', () => {
	it( 'matches snapshot', () => {
		snapshotObjectKeysAndTypes(FormListComponents);
	});
});
