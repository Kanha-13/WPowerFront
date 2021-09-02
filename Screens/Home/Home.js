import React, { useEffect, useState, useRef } from "react"
import profile from '../../assets/kanha.jpg'
import { Text, Image, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { locationPermission, getCurrentLocation } from "../../Utility/CurrentLocation";
import MapViewDirections from 'react-native-maps-directions';
const Home = () => {
  const [cords, setCords] = useState({
    lat: 0,
    lng: 0,
  })
  useEffect(() => {
    callCurrentLocation();
  }, [])
  const callCurrentLocation = async () => {
    const permission = await locationPermission();
    // console.log("location permission ", locationpermission)
    if (permission) {
      const res = await getCurrentLocation();
      setCords({ lat: res.lat, lng: res.lng })
      console.log(res)
    }
  }
  const [state, setState] = useState({
    pickupCords: {
      latitude: 30.7046,
      longitude: 76.7179,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,

    },
    dropCods: {
      latitude: cords.lat,
      longitude: cords.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,

    }

  })
  const { pickupCords, dropCods } = state
  const mapRef = useRef();
  return (
    <>
      <MapView
        style={{
          width: "100%",
          height: "85%",
          flexGrow: 1,
          borderRadius: 120,
        }}
        initialRegion={dropCods}
        ref={mapRef}
      >
        <Marker
          coordinate={dropCods}
        />
        <Marker
          coordinate={dropCods}

        />
        <MapViewDirections
          origin={pickupCords}
          destination={dropCods}
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
        />
      </MapView>

    </>
  );
}
export default Home
{/* <Image source={profile} style={{
    width: "100%",
    height: 300,
    borderRadius: 15,
    marginTop: 20,
  }}></Image>
  <Text style={{
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 5,
  }} >Kanha Agrawal.....</Text>
  <Text style={{
  }}>Hi there , this is my first react-native app
  </Text> */}