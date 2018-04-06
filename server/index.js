var express = require('express');
var bodyParser = require('body-parser');
require('dotenv').config()
var items = require('../database-pg');

var app = express();

// UNCOMMENT FOR REACT
// app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));

// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

app.get('/', function(req, res) {
  res.send('Hello World!');
});


app.listen(process.env.PORT, function() {
  console.log('listening on port 3000!');
});

