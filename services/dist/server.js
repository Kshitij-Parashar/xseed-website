'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

var _mailgunJs = require('mailgun-js');

var _mailgunJs2 = _interopRequireDefault(_mailgunJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
//support parsing of application/json type post data
app.use(_bodyParser2.default.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Access-Control-Allow-Credentials', true);
    // and remove cacheing so we get the most recent comments
    //res.setHeader('Cache-Control', 'no-cache');
    next();
});

/*
  Here is where we're going put most of the serve logic
*/

var logError = function logError(error) {
    if (error) throw error;
};
var server = function server() {
    // We do this can send our html and js static files to the browser through the server
    app.use(_express2.default.static('client/public'));
    app.post('/send_mail', function (request, response) {

        var data = request.body;

        var customerEmail = {
            to: data.email,
            from: "support@appfugu.com",
            subject: "Welcome!",
            body: 'Hi ' + (data.full_name || "") + ',<br> \n                    Welcome to  XSEED'
        };
        var adminEmail = {
            to: "kshitz@gmail.com",
            from: "support@appfugu.com",
            subject: "New User!",
            body: 'Hi Admin,<br> \n                    New user added  <br>\n                    name - ' + data.full_name + '<br>\n                    message - ' + data.message
        };

        var asyncTasks = [sendEmail.bind(null, customerEmail), sendEmail.bind(null, adminEmail)];

        _async2.default.parallel(asyncTasks, function (err, result) {
            if (err) {
                console.error(err.message);
                response.send({ ERROR: err.message });
                return;
            }
            response.send({ MESSAGE: "New User Added" });
        });
    });

    // 3000 is the port number, this could be any number from  0 to 9999
    app.listen(3001, function () {
        console.log('App listening on port 3001!');
    });
};

function sendEmail(json, cb) {
    console.log("email body sent -----> ", json.body);
    var mailGun = new _mailgunJs2.default(module.exports = {
        apiKey: 'key-4915bfc3903ecc724e34ef3def4adb1e',
        domain: 'appfugu.com'
    });
    var data = {
        from: json.from,
        to: json.to,
        subject: json.subject,
        html: json.body
    };
    mailGun.messages().send(data, function (err, body) {
        if (err) {
            console.log(err);
            cb(err);
        } else {
            console.log(body);
            cb(null, "Email Sent");
        }
    });
};

exports.default = server;