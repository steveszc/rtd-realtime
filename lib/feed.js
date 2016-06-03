var http = require('http');
var decode = require('gtfs-realtime-bindings').FeedMessage.decode;

var config = require('../config.js');

var verbose = false;

module.exports = function getFeed(path, cb) {
  if (verbose) console.log(`getting feed from ${path}`)
  var feed = '';

  var req = http.request(Object.assign({path: path},config.http), (res) => {
    if (verbose) console.log(`STATUS: ${res.statusCode}`);
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
    if (verbose) console.log(`problem with request: ${e.message}`);
  });

  req.end();
}
