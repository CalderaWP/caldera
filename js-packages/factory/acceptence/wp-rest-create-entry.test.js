const apiRootURL = 'https://caldera.lndo.site/wp-json/caldera-api/';
const fetch = require( 'isomorphic-fetch')
const requestUrl = (endpoint) => {
	return `${apiRootURL}/${endpoint}`;
};
describe('Tests run', () => {
	expect(1).toBe(1)
});

describe('Creating entries via REST API of WordPress', () => {
	test.skip('create contact form entry', async (done) => {
		fetch("http://localhost:3000/wp-json/caldera-api/v1/entries?formId=contact-form", {
			"credentials": "include",
			"headers": {
				"accept": "*/*",
				"accept-language": "en-US,en;q=0.9",
				"cache-control": "no-cache",
				"content-type": "application/json",
				"pragma": "no-cache",
				"x-cwp-token": "undefined"
			},
			"referrer": "http://localhost:3001/",
			"referrerPolicy": "no-referrer-when-downgrade",
			"body": "{\"formId\":\"contact-form\",\"entryValues\":{\"firstName\":\"Josh\",\"email\":\"Josh@CalderaWP.com\",\"consent\":true}}",
			"method": "PUT",
			"mode": "cors"
		}).then(r => r.json())
			.then(r => {
				//{"id":"89","formId":"contact-form","date":"2019-01-04 13:05:13","userId":0,"entryValues":{"196":{"fieldId":"firstName","formId":"contact-form","slug":"firstName","entryId":89,"id":"196","value":"Josh"},"197":{"fieldId":"email","formId":"contact-form","slug":"email","entryId":89,"id":"197","value":"Josh@CalderaWP.com"},"198":{"fieldId":"consent","formId":"contact-form","slug":"consent","entryId":89,"id":"198","value":"1"}}}
				expect(r.hasOwnProperty('id')).toBe(true);
				expect(r.hasOwnProperty('formId')).toBe(true);
				expect(r.formId).toEqual( 'contact-form' );
				expect(r.hasOwnProperty('date')).toBe(true);
				expect(r.hasOwnProperty('entryValues')).toBe(true);
				expect(r.hasOwnProperty('userId')).toBe(false);
				done();
			})
			.catch(e => {
				console.log(e);
				done()
			});
	})
})

