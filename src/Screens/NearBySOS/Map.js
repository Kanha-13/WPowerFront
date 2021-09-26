import React, { useEffect, useRef, useState } from 'react'
import MapView, { Marker } from "react-native-maps";
import { Dimensions, PixelRatio } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { getCurrentLocation } from '../../../Utility/CurrentLocation';
const Map = ({ familyLocation }) => {
  const mapRef = useRef();
  const { height, width } = Dimensions.get('window');
  const [myCords, setMapCords] = useState({

    latitudeDelta: 45.0254,
    longitudeDelta: 15.684,
  })

  useEffect(() => {
    let mounted = true;
    const interval = setInterval(async () => {
      setMapCords(await getCurrentLocation())
    }, 4000)
    mounted = false;
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    mapRef.current.animateCamera({ center: { latitude: myCords.latitude, longitude: myCords.longitude }, pitch: 2, heading: 20, altitude: 200, zoom: 400 }, 1000)
  }, [myCords])
  console.log("ola")
  return (
    <>
      <MapView
        ref={(map) => mapRef.current = map}
        fitToElements={true}
        fitToSuppliedMarkers={true}
        fitToCoordinates={true}
        style={{
          ...StyleSheet.absoluteFillObject,
          zIndex: -1000,
          width: width,
          height: height,
        }}
        region={{
          latitude: myCords.latitude,
          longitude: myCords.longitude,
          latitudeDelta: 0.001663,
          longitudeDelta: 0.002001,
        }}
        onLayout={() => {
          mapRef.animateCamera({
            center: {
              latitude: myCords.latitude,
              longitude: myCords.longitude,
            },
            heading: 0,
            pitch: 90,
          });
        }}

        mapTypeControlOptions={{
          style: "horizontalBar",
          position: "topCenter",
        }}
        showsMyLocationButton={true}
        initialRegion={{
          latitude: 20.5937,
          longitude: 78.9629,
          latitudeDelta: myCords.latitudeDelta,
          longitudeDelta: myCords.longitudeDelta,
        }}
        moveOnMarkerPress={true}
      >
        {
          typeof (myCords.latitude) === "undefined" ? <></> :
            <Marker
              coordinate={{ latitude: myCords.latitude, longitude: myCords.longitude }}
              title='Your Location'
            />
        }
        {/* {familyLocation ? <Marker
          coordinate={familyLocation}
          title='Your Location'
        ></Marker > : null} */}
      </MapView>
    </>
  );
}
export default Map;
