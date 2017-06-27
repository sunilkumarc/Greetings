var express = require('express');
var greetingsController = require('./greeting');
var bodyParser = require('body-parser');
var path = require('path');
var formidable = require('formidable')

var app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, './')));

function startServer(port) {
    var port = Number(process.env.PORT || port);
    server = app.listen(port);
    console.log('Server started on ' + port + '...');
}

app.get('/', function get(req, res) {
    res.status(200).send('Greetings!');
});

app.post('/greeting/birthday', function (req, res) {
    var form = new formidable.IncomingForm();
    
    form.uploadDir = "uploaded_images";
    form.keepExtensions = true;
    var filePath = "";

    form.on('file', function(name, file) {
        filePath = file.path;
    });
    
    form.parse(req, function (err, fields, files) {
        try {
            var result = greetingsController.greetForBirthday(fields.from, fields.to, fields.subject, fields.text, filePath);
            res.status(200).send('Email sent successfully!');
        } catch (e) {
            res.status(500).send('Something went wrong! Contact the bloody developer!');
        }
    });

    form.on('error', function (err) {
        res.status(500).send(err.message);
    })
});

startServer(8000);