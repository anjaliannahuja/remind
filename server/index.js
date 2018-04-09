let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session')
let db = require('../database-pg/index');
let helpers = require('../helpers/twilio');
require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));

app.use(session({
  secret: 'anything',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.post('/register', function (req, res) {
  let phoneNumber = req.body.phoneNumber;
  let verifyCode = Math.floor(Math.random()*900000) + 100000;

  new Promise((resolve, reject) => {
    resolve(db.createUser(phoneNumber, verifyCode));
  })
    .then(() => {
      helpers.createTwilioMessage(phoneNumber, 'Verification Number: ' + verifyCode);
      req.session.verified = false;
      req.session.phoneNumber = phoneNumber;
      req.session.verifyCode = verifyCode;
      res.status(201).end(' Verification message sent!');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end('Fail to send verification code');
    });
  });
  
  
  app.post('/verify', function (req, res) {
    let userVerifyCode = req.body.userVerifyCode;
    new Promise((resolve, reject) => {
      if (userVerifyCode === req.session.verifyCode.toString()) {
        resolve(db.updateStatus(req.session.phoneNumber));
        req.session.verified = true;
      } else {
        reject();
      }
    })
    .then(() => {
      res.status(201).end('User verified');
    })
    .catch(err => {
      console.log(err);
      db.deleteUser(req.session.phoneNumber);
      res.status(500).end('User verified incorrectly and deleted');
    })
});

app.post('/schedule', function(req, res) {
  let phoneNumber = req.session.phoneNumber;
  let message = req.body.messageText;
  let scheduledTime = req.body.scheduledTime;
  new Promise((resolve, reject) => {
   resolve(db.insertMessage(message, scheduledTime, phoneNumber));
  })
    .then(() => {
      res.status(201).end('Reminder stored');
    })
    .catch(err => {
      console.log(err);
      res.status(500).end('Message not stored');
    })
});

app.listen(process.env.PORT, function() {
  console.log('listening on port 3000!');
});


// SET INTERVAL FOR MESSAGES
setInterval(() => {
  let messages = [];
  db.checkMessages()
    .then(messages => {
      if (messages.rows.length > 0) {
        messages.rows.forEach(message => {
          helpers.createTwilioMessage(message.phone_number, message.message_text);
          db.deleteMessage(message.message_id);
        });
      }
    })
    .catch(err => {
      console.log('No messages returned: ' + err);
    });

}, 1000);
