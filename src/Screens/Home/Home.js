import React, { useEffect, useState, useRef } from "react"
import { locationPermission, getCurrentLocation } from "../../../Utility/CurrentLocation";
import MapVerticalSlide from "./MapVerticalSlide";
import MyDetails from "./MyDetails&Help";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import { View } from 'react-native'
import VMD from "../VerticalMapDrawer";
const Home = () => {
  const [help, setHelp] = useState(false)
  const [res, setRes] = useState({
    lat: 0,
    lng: 0
  })
  const [myCords, setmyCords] = useState({
    latitude: 20.5937,
    longitude: 78.9629,
    latitudeDelta: 0,
    longitudeDelta: 30.0,

  })
  const [helpCords, sethelpCords] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  useEffect(() => {
    // const interval = setInterval(() => {
    callCurrentLocation()
    // }, 4000);
    // return () => clearInterval(interval)
  }, [])
  //fetch current location==================================================
  const callCurrentLocation = async () => {
    const permission = await locationPermission();
    if (permission) {
      setRes(await getCurrentLocation())
    }
  }
  useEffect(() => {
    setmyCords({
      ...myCords,
      latitude: res.lat,
      longitude: res.lng,
      latitudeDelta: (res.lat !== 0) ? 0.0922 : 0,
      longitudeDelta: (res.lng !== 0) ? 0.0421 : 30.0,
    })
    console.log(res)
    console.log(myCords)
  }, [res])
  //=========================================================================

  const mapRef = useRef();
  return (
    <>{
      res &&
      <>
        <MyDetails myCords={myCords} />
        <MapVerticalSlide myCords={myCords} helpCords={helpCords} res={res} help={help} />
      </>
    }
    </>
  );
}
export default Home