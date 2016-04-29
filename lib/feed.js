var http = require('http');
var decode = require('gtfs-realtime-bindings').FeedMessage.decode;

var config = require('../config.js');

module.exports = function getFeed(path, cb) {
  console.log(`getting feed from ${path}`)
  var feed = '';

  var req = http.request(Object.assign({path: path},config.http), (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    var data = [ ];
    res.on('data', (chunk) => {
      data.push(chunk);
    });

    res.on('end', () => {
      var binary = Buffer.concat(data).toString('base64');
      feed = decode(binary);
      cb(feed);
    })
  });

  req.on('error', (e) => {
    console.log(`problem with request: ${e.message}`);
  });

  req.end();
}
