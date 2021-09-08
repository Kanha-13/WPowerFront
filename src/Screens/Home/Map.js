import React, { useRef, useState } from 'react'
import MapView, { Marker } from "react-native-maps";
import { Dimensions, PixelRatio } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
const Map = ({ myCords, helpCords, help }) => {
  const { latitude, longitude } = myCords;
  const mapRef = useRef()
  const { height, width } = Dimensions.get('window');
  return (
    <>
      <MapView
        fitToElements={true}
        fitToSuppliedMarkers={true}
        fitToCoordinates={true}
        style={{
          ...StyleSheet.absoluteFillObject,
          zIndex: -1000,
          width: width,
          height: height + 30,
          // top: 20,
        }}
        initialRegion={myCords}
      >
        <Marker
          coordinate={{ latitude: latitude, longitude: longitude }}
          title='Your Location'
          description={`${[latitude, longitude]}`}
        ></Marker >
      </MapView>
    </>
  );
}
export default Map;




{/* <MapViewDirections
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
/> */}