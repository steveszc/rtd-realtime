var path = require('../config').path;
var getFeed = require('./feed');
var writeJSON = require('./writeJSON');

module.exports = {
    VehiclePositions: {
        load: function(cb) {
            cb = cb || () => {};
            getFeed(path.VehiclePositions, feed => cb(feed));
        },
        write: function(cb) {
            cb = cb || () => {};
            getFeed(path.VehiclePositions, feed => {
                writeJSON('gtfs-rt/VehiclePositions.json', feed, (err) => {
                  if (err) throw err;
                  cb(feed);
                });

            });
        }
    },
    TripUpdates: {
        load: function(cb) {
            cb = cb || () => {};
            getFeed(path.TripUpdates, feed => cb(feed));
        },
        write: function(cb) {
            cb = cb || () => {};
            getFeed(path.TripUpdates, feed => {
                writeJSON('gtfs-rt/TripUpdates.json', feed, (err) => {
                  if (err) throw err;
                  cb(feed);
                });

            });
        }
    }
};
