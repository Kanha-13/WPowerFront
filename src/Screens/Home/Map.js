import React, { useRef, useState } from 'react'
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import { Dimensions, PixelRatio } from 'react-native';
import { Text, View } from 'react-native';
const Map = ({ myCords, helpCords, res, help }) => {
  const mapRef = useRef()
  const { height, width } = Dimensions.get('window');
  return (
    <MapView
      style={{
        width: width,
        height: height,
        top: 0,
        flexGrow: 1,
        position: "absolute",
        zIndex: -1,
      }}
      center={myCords}
      initialRegion={myCords}
      ref={mapRef}
      showsUserLocation={true}
      showsMyLocationButton={true}
    // initialCamera={myCords}
    >
      {/* <Marker style={{
        zIndex: 10000,
      }}
        coordinate={myCords}
      /> */}
      {
        help &&
        <>
          <Marker
            coordinate={helpCords}

          />
          <MapViewDirections
            origin={myCords}
            destination={helpCords}
            apikey="AIzaSyAsZbs9xy83SCO8-0MViS37BTyKqoP8GK0"
            strokeWidth={3}
            strokeColor="hotpink"
            optimizeWaypoints={true}
            onReady={res => {
              mapRef.current.fitToCoordinates(res.coordinates, {
                edgePadding: {
                  right: 30,
                  bottom: 300,
                  left: 30,
                  top: 100,
                }
              })
            }}
          /></>
      }
    </MapView>
  );
}
export default Map;