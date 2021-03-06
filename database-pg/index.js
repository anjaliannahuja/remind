var pg = require('pg');
require('dotenv').config()

var connection = (process.env.DATABASE_URL);

const client = new pg.Client(connection);
client.connect();

// INSERT MESSAGE INTO DB
const insertMessage = (messageText, scheduledTime, phoneNumber) => {
  client.query('INSERT INTO messages (message_text, scheduled_time, user_id) values ($1, $2, (select user_id from users where phone_number = $3 AND verified_status = true))', [messageText, scheduledTime, phoneNumber])
    .then(() => console.log('Message created successfully'))
    .catch(err => console.log('Message not created: ' + err));
};

// INSERT TO INSERT NEW USER BEFORE VERIFIED
const createUser = (phoneNumber, verifyCode) => {
  client.query('INSERT INTO users (phone_number, verify_code, verified_status) values ($1, $2, false);', [phoneNumber, verifyCode])
    .then(() => console.log('User created successfully'))
    .catch(err => console.log('User not created: ' + err));
};

// UPDATE VERIFIED STATUS TO BE TRUE IF CLIENT ENTERS MESSAGE
const updateStatus = (phoneNumber) => {
  client.query('UPDATE users SET verified_status = true WHERE phone_number = $1', [phoneNumber])
    .then(() => console.log('User verified successfully'))
    .catch(err => console.log('User not verified: ' + err));
};

// CREATE PASSWORD
const updatePassword = (phoneNumber, password) => {
  client.query('UPDATE users SET password = $2 WHERE phone_number = $1', [phoneNumber, password])
    .then(() => console.log('User password created'))
    .catch(err => console.log('User password not created: ' + err));
};

// LOGIN
const loginUser = (phoneNumber, password) => {
  return client.query('SELECT user_id FROM users WHERE phone_number = $1 AND password = $2', [phoneNumber, password]);
};

// CREATE QUERY TO CHECK IF ANY TIMES ARE GREATER THAN CURRENT TIME
const checkMessages = () => {
  return client.query('SELECT messages.message_id, users.phone_number, messages.message_text FROM users INNER JOIN messages ON (users.user_id = messages.user_id) WHERE messages.scheduled_time < CURRENT_TIMESTAMP;');
};

// DELETE USER
const deleteUser = (phoneNumber) => {
  client.query('DELETE FROM users WHERE phone_number = $1', [phoneNumber])
    .then(() => console.log('User deleted'))
    .catch(err => console.log(err))
};

const deleteMessage = (messageId) => {
  client.query('DELETE FROM messages WHERE message_id = $1', [messageId])
  .then(() => console.log('Message deleted'))
  .catch(err => console.log(err))
}

module.exports.insertMessage = insertMessage;
module.exports.createUser = createUser;
module.exports.updateStatus = updateStatus;
module.exports.updatePassword = updatePassword;
module.exports.loginUser = loginUser;
module.exports.checkMessages = checkMessages;
module.exports.deleteUser = deleteUser;
module.exports.deleteMessage = deleteMessage;
