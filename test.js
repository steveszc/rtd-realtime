var realtime = require('./index');

realtime.TripUpdates.write((error, feed) => console.log(error, feed.entity.length+' trip updates written to file system'));

realtime.TripUpdates.load((error, feed) => console.log(error, feed.entity.length+' trip updates loaded to memory'));

realtime.VehiclePositions.write((error, feed) => console.log(error, feed.entity.length+' vehicle positions written to file system'));

realtime.VehiclePositions.load((error, feed) => console.log(error, feed.entity.length+' vehicle positions loaded to memory'));
