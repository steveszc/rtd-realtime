# rtd-realtime
nodejs module for accessing RTD realtime feeds. Data feed formatting follows GTFS-realtime specification.

[GTFS-realtime spec](https://developers.google.com/transit/gtfs-realtime/)

Utilizes [Google's GTFS-realtime binding library for NodeJS](https://github.com/google/gtfs-realtime-bindings/tree/master/nodejs)

`npm install steveszc/rtd-realtime`

```
var realtime = require('rtd-realtime');

realtime.VehiclePositions.load( feed => {
    // 'feed' will be supplied as decode json representation of a GTFS-RT feed
});
```

## API

## VehiclePositions#load
The VehiclePositions feed object will be made available to a callback
```
realtime.VehiclePositions.load( feed => {
    // Do stuff here
    // 'feed' will be supplied as decode json representation of a GTFS-RT feed
});
```

## VehiclePositions#write
VehiclePosition.json will be written to your file system
The feed object will be made available to a callback
```
realtime.VehiclePositions.write( feed => {
    // 'feed' will be supplied as decode json representation of a GTFS-RT feed
    // A JSON file of the feed will be written to your file system
});
```

## TripUpdates#load
The TripUpdates feed object will be made available to a callback
```
realtime.TripUpdates.load( feed => {
    // 'feed' will be supplied as decode json representation of a GTFS-RT feed
});
```

## TripUpdates#write
TripUpdates.json will be written to your file system
The feed object will be made available to a callback
```
realtime.TripUpdates.load( feed => {
    // 'feed' will be supplied as decode json representation of a GTFS-RT feed
    // A JSON file of the feed will be written to your file system
});
```
