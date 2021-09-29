import React, { useEffect, useRef, useState } from 'react'
import MapView, { Marker } from "react-native-maps";
import { Dimensions, PixelRatio } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import { getCurrentLocation } from '../../../Utility/CurrentLocation';
import AsyncStorage from '@react-native-async-storage/async-storage';
const CustomMarker = () => (
  <View
    style={{
      height: 100,
      width: 70,
      backgroundColor: "#007bff",
      borderRadius: 250,
      borderRadius: 15,
      overflow: "hidden"
    }}
  >
    <Image style={{ width: 70, height: 70 }} source={require("../../../assets/kanha.jpg")} />
  </View>
);
const Map = ({ }) => {
  const mapRef = useRef();
  const { height, width } = Dimensions.get('window');
  const [myCords, setMyCords] = useState({
    latitudeDelta: 45.0254,
    longitudeDelta: 15.684,
  })
  useEffect(async () => {
    let mounted = true;
    let oldLocation = await AsyncStorage.getItem('oldLocation')
    if (oldLocation === null) {
    } else {
      setMyCords(JSON.parse(oldLocation))
    }
    mounted = false;
  }, [])

  useEffect(() => {
    let mounted = true;
    const interval = setInterval(async () => {
      const cords = await getCurrentLocation()
      setMyCords(cords)
      try {
        await AsyncStorage.setItem('oldLocation', JSON.stringify(cords))
      } catch (error) {
        console.log("error in saving number", error)
      }
    }, 4000)
    mounted = false;
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.animateCamera(
        {
          center: {
            latitude: myCords.latitude,
            longitude: myCords.longitude
          },
          zoom: 20
        },
        5000
      );
    }
  }, [myCords]);

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
          // height: 800,
          height: height,
        }}
        // region={{
        //   latitude: myCords.latitude,
        //   longitude: myCords.longitude,
        //   latitudeDelta: 0.045,
        //   longitudeDelta: 0.0114,
        // }}

        mapTypeControlOptions={{
          style: "horizontalBar",
          position: "topCenter",
        }}
        showsMyLocationButton={true}
        initialRegion={{
          latitude: 20.5937,
          longitude: 78.9629,
          latitudeDelta: 45.0254,
          longitudeDelta: 15.684,
        }}
        moveOnMarkerPress={true}
      >
        {
          typeof (myCords.latitude) === "undefined" ? <></> :
            <Marker
              coordinate={{ latitude: myCords.latitude, longitude: myCords.longitude }}
            >
              {/* <CustomMarker /> */}
            </Marker>
        }
        {/* {familyLocation ? <Marker
          coordinate={familyLocation}
          title='Your Location'
        ></Marker > : null} */}
      </MapView>
    </>
  );
}
Map.propTypes = {
  name: PropTypes.string
};
export default Map;
