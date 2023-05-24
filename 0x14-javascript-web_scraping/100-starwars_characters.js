#!/usr/bin/node
const request = require('request');
const url = 'https://swapi.co/api/films/' + process.argv[2];
request(url, function (error, response, body) {
  if (error) {
    console.error('error:', error);
  } else {
    try {
      const rbody = JSON.parse(body);
      for (const i of rbody.characters) {
        request(i, function (errorc, responsec, bodyc) {
          if (error) {
            console.error('error:', errorc);
          } else {
            try {
              const cbody = JSON.parse(bodyc);
              console.log(cbody.name);
            } catch (error) {
              console.error('error:', error);
            }
          }
        });
      }
    } catch (err) {
      console.error('error:', err);
    }
  }
});
