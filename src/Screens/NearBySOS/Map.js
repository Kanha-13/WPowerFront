import React, { useContext, useEffect, useState } from 'react'
import MapView, { Camera, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Button, Dimensions, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import { getCurrentLocation } from '../../../Utility/CurrentLocation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import marker from '../../../assets/marker.png'
// import { locateMe } from './helper';
import { StateContext } from '../../../Utility/StateProvider';
const CustomMarker = () => (
  <View
    style={{
      height: 90,
      width: 80,
      borderRadius: 250,
      borderRadius: 15,
      overflow: "hidden"
    }}
  >
    <Image style={{ tintColor: "black", zIndex: 1, width: 75, height: 90, position: "absolute", alignSelf: "center" }} source={marker} />
    <View style={{ borderRadius: 50, width: 85, height: 95, overflow: "hidden", alignSelf: "center" }}>
      <Image style={{ top: 7, width: 63, height: 62, alignSelf: "center", borderRadius: 50 }} source={require("../../../assets/kanha.jpg")} />
    </View>
  </View>
);
const Map = ({ helpCords }) => {
  const State = useContext(StateContext);
  const mapRef = State.mapRef
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
      try {
        console.log("called")
        const cords = await getCurrentLocation()
        setMyCords(cords)
        await AsyncStorage.setItem('oldLocation', JSON.stringify(cords))
      } catch (error) {
        console.log(error)
      }
    }, 4000)
    mounted = false;
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setTimeout(
      () => {
        if (mapRef.current && myCords.latitude) {
          const newCamera = {
            center: { latitude: myCords.latitude, longitude: myCords.longitude },
            zoom: 15,
            heading: 0,
            pitch: 0,
            altitude: 5
          }
          mapRef.current.animateCamera(newCamera, { duration: 600 });
        }
      }, 1000
    );
  }, [mapRef.current]);

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={(map) => mapRef.current = map}
        fitToElements={true}
        fitToSuppliedMarkers={true}
        fitToCoordinates={true}
        animateCamera={
          {
            center: {
              latitude: 3.0256,
              longitude: 3.0256
            }, zoom: 200
          }, 5000
        }
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
              <CustomMarker />
            </Marker>
        }
        {helpCords.latitude ? <Marker
          coordinate={helpCords}
          title='Help'
        ></Marker > : null}
      </MapView>
      <TouchableOpacity style={{
        top: 10,
        width: 60,
        height: 60,
        zIndex: 100,
        backgroundColor: "pink",
      }}>
        <Text>Touch</Text>
      </TouchableOpacity>
    </>
  );
}
Map.propTypes = {
  name: PropTypes.string
};
export default Map;
