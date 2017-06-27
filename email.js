var api_key = 'key-8dc58954dbf80c9bc284e55ef3adf842';
var domain = 'sandbox654938629c71400ca29474cb5b35b233.mailgun.org';
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });
var mailcomposer = require('mailcomposer')
var fs = require('fs');

function Mail() {
    function sendMail(from, to, subject, text, filePath) {
        // var contents = "<!DOCTYPE><html>" + text + "<br/><br/>Access your birthday card <a href=\"http://pump-attendant-yards-47683.bitballoon.com/\">here</a></html>";
        /*
        var contents = fs.readFileSync('./template.html', 'utf8');
        var mail = mailcomposer({
            from: from,
            to: to,
            subject: subject,
            text: text,
            html: contents
            // ,inline: './images/gift_box.png' // Not working
        });

        mail.build(function (mailBuildError, message) {

            var dataToSend = {
                to: to,
                message: message.toString('ascii')
            };

            mailgun.messages().sendMime(dataToSend, function (sendError, body) {
                if (sendError) {
                    console.log(sendError);
                    return;
                } else {
                    console.log(body);
                }
            });
        });
        */

        /* Sending Inline Images */
        var data = {
            from: from,
            to: to,
            subject: subject,
            text: text,
            inline: filePath
        };

        mailgun.messages().send(data, function (error, body) {
            console.log(body);
        });
        
    }

    return {
        sendMail: sendMail
    };
}

module.exports = Mail();