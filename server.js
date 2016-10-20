var request = require('request');

setInterval(function () {
  console.log('http://' + process.env.LOADBALANCER_REF + '/');
  // GET http://node-app/
  request.get('http://' + process.env.LOADBALANCER_REF + '/', function (err, res, body) {
    console.log('response', body);
  });
}, 5000);