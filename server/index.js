require('dotenv').config()
const helpers = require('../helpers/twilio');
var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-pg');

var app = express();

// UNCOMMENT FOR REACT
// app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));

app.post('/register', function (req, res) {
  let phoneNumber = req.body.phoneNumber || '3612496953';
  let verifyCode = Math.floor(Math.random()*900000) + 100000;

  Promise.all(db.createUser(phoneNumber, verifyCode), helpers.createTwilioMessage(phoneNumber, verifyCode))
    .then(() => {
      res.status(201).end();
    })
    .catch((err) => {
      res.status(500).end('Fail to send messages');
    });
    
  
  
  // helpers.createTwilioMessage(phoneNumber, verifyCode)
  //   .then()
});


// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

// app.get('/', function(req, res) {
//   res.send('Hello World!');
//   helpers.createTwilioMessage('3612496953', 'test with server');
// });


app.listen(process.env.PORT, function() {
  console.log('listening on port 3000!');
});

