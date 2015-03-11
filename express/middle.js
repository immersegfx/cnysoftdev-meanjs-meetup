/**
 * Example Express Middleware Application
 * @type {*|exports}
 */
var express = require('express');
var app = express();

// a middleware with no mount path; gets executed for every request to the app
app.use(function (req, res, next) {
    if(req.query.id == 1) {
        next();
    } else {
        res.status(404).send('You must add ?id=1 to the url')
    }
});

app.use('/', function (req, res, next) {
    res.send('Hello, hope you enjoyed my easily exploitable access control');
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port)

});