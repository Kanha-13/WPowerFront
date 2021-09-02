import React, { useEffect, useState } from "react"
import profile from '../../assets/kanha.jpg'
import { Text, Image, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { locationPermission, getCurrentLocation } from "../../Utility/CurrentLocation";
const Home = () => {
  const [cords, setCords] = useState({
    lat: "",
    lng: ""
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
  return (
    <>
      <MapView
        style={{
          width: "100%",
          height: "85%",
          flexGrow: 1,
          borderRadius: 120,
        }}
        initialRegion={{
          latitude: cords.lat,
          longitude: cords.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
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
    </>
  );
}
export default Home