var path = require('../config').path;
var getFeed = require('./feed');
var writeJSON = require('./writeJSON');

module.exports = {
  VehiclePositions: {
    load: function(cb) {
      cb = cb || () => {};
      getFeed(path.VehiclePositions, (error, feed) => cb(error, feed));
    },
    write: function(cb) {
        cb = cb || () => {};
        getFeed(path.VehiclePositions, (error, feed) => {
            if (error) {
                cb(error, feed);
            } else {
                writeJSON('gtfs-rt/VehiclePositions.json', feed, (error) => {
                    cb(error, feed);
                });
            }
        });
    }
  },
  TripUpdates: {
    load: function(cb) {
      cb = cb || () => {};
      getFeed(path.TripUpdates, (error, feed) => cb(error, feed));
    },
    write: function(cb) {
      cb = cb || () => {};
      getFeed(path.TripUpdates, (error, feed) => {
        if (error) {
          cb(error, feed);
        } else {
          writeJSON('gtfs-rt/TripUpdates.json', feed, (error) => {
            cb(error, feed);
          });
        }
      });
    }
  }
};
