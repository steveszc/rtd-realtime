var realtime = require('./index');

realtime.TripUpdates.write(console.log('trip updates written to file system'));
realtime.TripUpdates.load(console.log('trip updates loaded to memory'));
realtime.VehiclePositions.write(console.log('vehicle positions written to file system'));
realtime.VehiclePositions.load(console.log('vehicle positions loaded to memory'));
