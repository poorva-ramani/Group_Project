
var mykey = config.MY_KEY;
var keyID = config.MY_ID;
var token = config.TOKEN;

const Nylas = require('nylas');

Nylas.config({
  clientId: keyID ,
  clientSecret: mykey,
});

const nylas = Nylas.with(token);

Nylas.accounts.list().then(accounts => {
    for (let account of accounts) {
      console.log(
        `Email: ${account.emailAddress} | `,
        `Billing State: ${account.billingState} | `,
        `Sync State: ${account.syncState}`,
        `ID: ${account.id} | `
      );
    }
  });










