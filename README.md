# rtd-realtime
nodejs module for accessing RTD realtime feeds. Data feed formatting follows GTFS-realtime specification.

[GTFS-realtime spec](https://developers.google.com/transit/gtfs-realtime/)

Utilizes [Google's GTFS-realtime binding library for NodeJS](https://github.com/google/gtfs-realtime-bindings/tree/master/nodejs)

`npm install steveszc/rtd-realtime`

```
var realtime = require('rtd-realtime');

realtime.VehiclePositions.load( (err,feed) => {
    // 'err' will be supplied if an error occured in the request or decoding of the feed,
    // otherwise 'err' will be null
    // 'feed' will be supplied as decode json representation of a GTFS-RT feed
});
```

## API

### VehiclePositions#load
The VehiclePositions feed object will be made available to a callback
```
realtime.VehiclePositions.load( (err,feed) => {
    // 'err' will be supplied if an error occured in the request or decoding of the feed,
    // otherwise 'err' will be null
    // 'feed' will be supplied as decode json representation of a GTFS-RT feed
});
```

### VehiclePositions#write
VehiclePosition.json will be written to your file system
The feed object will be made available to a callback
```
realtime.VehiclePositions.write( (err,feed) => {
    // 'err' will be supplied if an error occured in the request or decoding of the feed,
    // otherwise 'err' will be null
    // 'feed' will be supplied as decode json representation of a GTFS-RT feed
    // A JSON file of the feed will be written to your file system
});
```

### TripUpdates#load
The TripUpdates feed object will be made available to a callback
```
realtime.TripUpdates.load( (err,feed) => {
    // 'err' will be supplied if an error occured in the request or decoding of the feed,
    // otherwise 'err' will be null
    // 'feed' will be supplied as decode json representation of a GTFS-RT feed
});
```

### TripUpdates#write
TripUpdates.json will be written to your file system
The feed object will be made available to a callback
```
realtime.TripUpdates.load( (err,feed) => {
    // 'feed' will be supplied as decode json representation of a GTFS-RT feed
    // A JSON file of the feed will be written to your file system
});
```

##IMPORTANT!
This module includes a set of access credentials in config.js that are intended for development purposes only. Do not use these credentials in a production app. There is no guarantee that they will work. To request a unique set of credentials please visit the [RTD Developer Resources webpage](http://www.rtd-denver.com/gtfs-developer-guide.shtml#realtime-feeds) and request access to GTFS-RT. You'll need to fork this repo, update config.js with your credentials, and use that version in your app.
