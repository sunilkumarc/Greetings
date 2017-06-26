var Mail = require('./email');

function Greet() {
    function sendBirthdayGreeting(from, to, subject, text) {
        return Mail.sendMail(from, to, subject, text);
    }

    function sendMarriageGreeting(name) {
        return "Happy Married Life " + name + "!";
    }

    return {
        greetForBirthday: sendBirthdayGreeting,
        greetForMarriage: sendMarriageGreeting
    }
}

module.exports = Greet();