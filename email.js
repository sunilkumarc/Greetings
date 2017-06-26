var api_key = 'key-8dc58954dbf80c9bc284e55ef3adf842';
var domain = 'sandbox654938629c71400ca29474cb5b35b233.mailgun.org';
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

function Mail() {
    function sendMail(from, to, subject, text) {
        var data = {
            from: from,
            to: to,
            subject: subject,
            text: text
        }

        mailgun.messages().send(data, function (error, body) {
            if (error) throw Error(error.message);
            else console.log(body);
        });
    }

    return {
        sendMail: sendMail
    };
}

module.exports = Mail();