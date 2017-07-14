

import express from 'express';
import bodyParser from 'body-parser';
import async from 'async';
import MailGun from 'mailgun-js';

var app = express();
//support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Access-Control-Allow-Credentials',true);
    // and remove cacheing so we get the most recent comments
    //res.setHeader('Cache-Control', 'no-cache');
    next();
});

/*
  Here is where we're going put most of the serve logic
*/

var logError = (error)=>{
     if(error)
        throw error;
}
var server = () => {
    // We do this can send our html and js static files to the browser through the server
    app.use(express.static('client/public'));
    app.post('/send_mail', (request, response)=>{

        let data = request.body;

        let customerEmail = {
            to : data.email,
            from : "support@appfugu.com",
            subject : "Welcome!",
            body : `Hi ${data.full_name || ""},<br> 
                    Welcome to  XSEED`
        };
        let adminEmail = {
            to : "kshitz@gmail.com",
            from : "support@appfugu.com",
            subject : "New User!",
            body : `Hi Admin,<br> 
                    New user added  <br>
                    name - ${data.full_name}<br>
                    message - ${data.message}`
        };
        
        let asyncTasks = [
            sendEmail.bind(null,customerEmail),
            sendEmail.bind(null,adminEmail)
        ];
        
        async.parallel(asyncTasks, function (err, result){
            if(err){
                console.error(err.message);
                response.send({ERROR : err.message});
                return;
            }
            response.send({MESSAGE : "New User Added"});
        })
    });


    // 3000 is the port number, this could be any number from  0 to 9999
    app.listen(3001, () => {
        console.log('App listening on port 3001!')
    })
}

function sendEmail(json, cb) {
    console.log("email body sent -----> ",json.body);
    var mailGun = new MailGun(module.exports = {
        apiKey : 'key-4915bfc3903ecc724e34ef3def4adb1e',
        domain : 'appfugu.com'
    });
    var data = {
        from : json.from,
        to : json.to,
        subject : json.subject,
        html : json.body
    };
    mailGun.messages().send(data, function (err, body) {
        if(err) {
            console.log(err);
            cb(err);
        }
        else {
            console.log(body);
            cb(null,"Email Sent");
        }
    })
};


export default server;
