var express = require('express');
var greetingsController = require('./greeting');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

function startServer(port) {
    var port = Number(process.env.PORT || port);
    server = app.listen(port);
    console.log('Server started on ' + port + '...');
}

app.get('/', function get(req, res) {
    res.status(200).send('Greetings!');
});

app.post('/greeting/birthday', function(req, res) {
    var body = req.body;
    try {
        var result = greetingsController.greetForBirthday(body.from, body.to, body.subject, body.text);
        res.status(200).send('Email sent successfully!');
    } catch (e) {
        res.status(500).send('Something went wrong! Contact the bloody developer!');
    }
});

startServer(8000);