var http = require('http');
var decode = require('gtfs-realtime-bindings').FeedMessage.decode;

var config = require('../config.js');

module.exports = function getFeed(path, cb) {
  var feed;
  var error = null;

  var req = http.request(Object.assign({path: path},config.http), (res) => {
    var data = [ ];
    res.on('data', (chunk) => {
      data.push(chunk);
    });

    res.on('end', () => {
      var binary = Buffer.concat(data).toString('base64');
      try {
        feed = decode(binary);
      } catch(e) {
        error = e.message;
      } finally {
        cb(error, feed);
      }
    });
  });

  req.on('error', (e) => {
    error = e.message;
    cb(error, feed);
  });

  req.end();
}
