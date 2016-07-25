var realtime = require('./index');


var time1 = Date.now();
realtime.TripUpdates.write((error, feed) => console.log(error || (Date.now() - time1) + 'ms : success ' + feed.entity.length + ' trip updates written to file system'));

var time2 = Date.now();
realtime.TripUpdates.load((error, feed) => console.log(error || (Date.now() - time1) + 'ms : trip updates loaded to memory'));

var time3 = Date.now();
realtime.VehiclePositions.write((error, feed) => console.log(error || (Date.now() - time1) + 'ms : vehicle positions written to file system'));

var time4 = Date.now();
realtime.VehiclePositions.load((error, feed) => console.log(error || (Date.now() - time1) + 'ms : vehicle positions loaded to memory'));
