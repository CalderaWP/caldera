module.exports = (Sendgrid = null, router = new Router()) => {
	router.post('/', (req, res) => {
		var request = Sendgrid.emptyRequest();
	})

};
