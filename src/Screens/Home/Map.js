import React, { useRef, useState } from 'react'
import MapView, { Marker } from "react-native-maps";
import { Dimensions, PixelRatio } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
const Map = ({ myCords, helpCords, help }) => {
  const { latitude, longitude } = myCords;
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
          height: height,
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
