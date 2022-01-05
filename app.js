const mailgun = require("mailgun-js");
const DOMAIN = 'sandbox8b0b5a9401fc46e197f3554a6a6a91b9.mailgun.org';
const api_key = 'e5ee9880b90e6356f6a9952fffcfc387-0be3b63b-723e0d23';
const mg = mailgun({apiKey: api_key, domain: DOMAIN});
const data = {
	from: 'Excited User <me@samples.mailgun.org>',
	to: 'lefebvrexavier60@gmail.com',
	subject: 'Hello',
	text: 'Testing some Mailgun awesomness!'
};
mg.messages().send(data, function (error, body) {
	console.log(body);
});