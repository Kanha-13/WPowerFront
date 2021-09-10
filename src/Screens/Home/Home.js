import React, { useEffect, useState, useRef } from "react"
import { View } from "react-native";
import { locationPermission, getCurrentLocation } from "../../../Utility/CurrentLocation";
import Map from "./Map";
import MyDetails from "./MyDetails&Help";
const Home = () => {
  const [help, setHelp] = useState(false)
  const [myCords, setMyCords] = useState();
  const helpCords = {}
  const callCurrentLocation = async () => {
    const permission = await locationPermission();
    if (permission) {
      const cords = await getCurrentLocation()
      console.log(cords)
      setMyCords(
        cords
      )
    }
  }
  useEffect(() => {
    // const interval = setInterval(() => {
    callCurrentLocation()
    // }, 4000);
    // return () => clearInterval(interval)
  }, [])

  // const mapRef = useRef();
  return (
    <>{
      myCords &&
      <>
        <MyDetails myCords={myCords} />
        <Map myCords={myCords} helpCords={helpCords} help={help} />
      </>
    }
    </>
  );
}
export default Home