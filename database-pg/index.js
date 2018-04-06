var pg = require('pg');

var connection = ({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PW,
  database : process.env.DB_NAME
});

const client = new pg.Client(connection);
client.connect();

// SHOULD BE POST REQUEST TO POST A NEW MESSAGE REMINDER
// POST request will be inserting a new message into db
// const insertMessage = () => {
//   client.query('INSERT INTO messages ()
// }

// INSERT TO INSERT NEW USER BEFORE VERIFIED
// const createUser = (phoneNumber, verifyCode) => {
//   client.query('INSERT INTO users (phone_number, verify_code, verified_status) values ($1, $2, false)', 
//   [phoneNumber, verifyCode]);
// };

// createUser(13612496953, 123456);

// ALTER VERIFIED STATUS TO BE TRUE IF CLIENT RECEIVES MESSAGE

// var selectAll = function(callback) {
//   connection.query('SELECT * FROM items', function(err, results, fields) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, results);
//     }
//   });
// };

// module.exports.selectAll = selectAll;
