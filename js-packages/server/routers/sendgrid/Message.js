const EmailAddress = require( './EmailAddress');
const Personalizations = require( './Personalizations');
function Message({
	to,
	subject,
	fromName,
	contentType,
	attatchments,
	content,
	replyTo,
	cc=null,
	bcc = null
				 }) {

	const personalizations = Personalizations({to, subject,cc,bcc});


	return {
		method: 'POST',
		path: '/v3/mail/send',
		body: {
			personalizations,
			from: {email: 'no-reply@calderaformspro.net', name: fromName},
			content: [
				{
					type: contentType || 'text/html',
					value: content
				},
			],
		},
	}
}
