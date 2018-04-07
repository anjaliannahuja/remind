
const twilio = require('twilio');
require('dotenv').config()

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const client = twilio(accountSid, authToken);

const createTwilioMessage = (phoneNumber, message) => {
  client.messages.create({
    to: '+1' + phoneNumber,
    from: process.env.TWILIO_NUMBER,
    body: message
  })
  .then((message) => console.log(message.sid))
  .catch();
}


module.exports.createTwilioMessage = createTwilioMessage;