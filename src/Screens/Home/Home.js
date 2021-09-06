import React, { useEffect, useState, useRef } from "react"
import { locationPermission, getCurrentLocation } from "../../../Utility/CurrentLocation";
import Map from "./Map";
import MyDetails from "./MyDetails&Help";
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
    //   const interval = setInterval(() => {
    callCurrentLocation()
    //   }, 4000);
    //   return () => clearInterval(interval)
  }, [])
  //fetch current location==================================================
  const callCurrentLocation = async () => {
    const permission = await locationPermission();
    if (permission) {
      setRes(await getCurrentLocation())
    }
  }
  useEffect(() => {
    if (res.lat) setmyCords({
      ...myCords,
      latitude: (res.lat === 0) ? myCords : res.lat,
      longitude: (res.lng === 0) ? myCords : res.lng,
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
        <Map myCords={myCords} helpCords={helpCords} res={res} help={help} />
      </>
    }
    </>
  );
}
export default Home