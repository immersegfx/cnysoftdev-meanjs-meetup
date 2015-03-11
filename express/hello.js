/**
 * Example Express App For the MEAN.js Meetup
 * @type {*|exports}
 */
var express = require('express');
var app = express();

var options = {
    root: __dirname + '/html/'
};

app.get('/', function (req, res) {
    res.sendFile('index.html', options);
});

app.get('/fine', function (req, res) {
    res.sendFile('fine.html', options);
});
app.get('/doh', function (req, res) {
    res.sendFile('doh.html', options);
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port)

});