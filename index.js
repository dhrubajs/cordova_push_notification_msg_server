#!/usr/bin/env node

'use strict';

var gcm = require('node-gcm');
var sender = new gcm.Sender('AIzaSyCalWZPjdKd6igCVWKDOaJDqVvAGPzA7JQ');
var message = new gcm.Message();

// Create a message (all possible values shown)
message.addNotification({
    title: "Hello, World!",
    icon: "ic_launcher",
    body: "This is a notification that will be displayed ASAP."
});

// Add the registration tokens of the devices you want to send to
var registrationTokens = [];
registrationTokens.push('eXW-wKJ4-LQ:APA91bHrBX_joJ6_JT7Kl1wO-sKOMzWTEDpJE-rH6ReSVEG1s-AcmAXZoOWWo-Zhw4tDkZJr_Sfp0mlyTJXuC6JnpB-dK97MSZtBvq4Z03ox4V2pIvETrJmVnAVhSaDQagxkMVf2fMrt');

// ... or retrying
sender.send(message, registrationTokens, function (err, response) {
  if(err) console.error(err);
  else    console.log(response);
});
