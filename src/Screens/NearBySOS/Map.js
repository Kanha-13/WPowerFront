import React, { useEffect, useRef, useState } from 'react'
import MapView, { Marker } from "react-native-maps";
import { Dimensions, PixelRatio } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
const Map = ({ myCords, helpCords, help, familyLocation }) => {
  const { latitude, longitude } = myCords;
  const { height, width } = Dimensions.get('window');
  useEffect(() => {

  }, [])
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
        streetViewControl={true}
        mapTypeControl={true}
        mapTypeControlOptions={{
          style: "horizontalBar",
          position: "topCenter",
        }}
        initialRegion={myCords}
      >
        <Marker
          coordinate={{ latitude: latitude, longitude: longitude }}
          title='Your Location'
          description={`${[latitude, longitude]}`}
        ></Marker >
        {familyLocation ? <Marker
          coordinate={familyLocation}
          title='Your Location'
        // description={`${familyLocation.latitude, familyLocation.longitude}`}
        ></Marker > : null}
      </MapView>
    </>
  );
}
export default Map;
