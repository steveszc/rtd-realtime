var mkdirp = require('mkdirp');
var fs = require('fs');
var getDirName = require('path').dirname;

module.exports = function writeJSON(path, contents, cb) {
  mkdirp(getDirName(path), (err) => {
    if (err) return cb(err);
    fs.writeFile(path, JSON.stringify(contents), cb);
  });
};
