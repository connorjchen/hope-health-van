var nodemailer = require('nodemailer');
const sendEmail = function(){
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			type: 'OAuth2',
			user: process.env.MAIL_USERNAME,
			pass: process.env.MAIL_PASSWORD,
			clientId: process.env.OAUTH_CLIENTID,
			clientSecret: process.env.OAUTH_CLIENT_SECRET,
			refreshToken: process.env.OAUTH_REFRESH_TOKEN
		}
	});

	let mailOptions = {
		from: 'info@okbfoundation.org',
		to: 'apexial@aol.com',
		subject: 'Yes',
		text: 'Yes'
	};

	transporter.sendMail(mailOptions, function(err, data) {
		if (err) {
			console.log("Error " + err);
		} 
		else {
			console.log("Email sent successfully");
		}
	});
}

module.exports = sendEmail;

