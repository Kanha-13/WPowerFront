import React, { useRef, useState } from 'react'
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import VMD from '../VerticalMapDrawer';
import { Text, View } from 'react-native';
export default MapSlider = ({ myCords, helpCords, res, help }) => {
  const mapRef = useRef()
  return (

    <MapView
      style={{
        width: "100%",
        height: "100%",
        top: 0,
        flexGrow: 1,
        position: "absolute",
        zIndex: -1,
      }}
      initialRegion={myCords}
      ref={mapRef}
    >
      <Marker
        coordinate={myCords}
      />
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