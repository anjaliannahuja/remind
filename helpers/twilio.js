const request = require('request');
const twilio = require('twilio');

const postMessageToTwilio = () => {
  const accountSid = 'AC078d583e37baa9f2be36f44219197bd7';
  const authToken = 'dd71fec34715d8c0e932a10434d8809c';

  // require the Twilio module and create a REST client
  const client = twilio(accountSid, authToken);

  client.messages
    .create({
      to: '+13612496953',
      from: '+15127906796',
      body: 'WHATUPPP',
    })
    .then(message => console.log(message.sid));
};

module.exports.postMessageToTwilio = postMessageToTwilio;