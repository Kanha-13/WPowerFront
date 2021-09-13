import React, { useEffect, useState, useRef } from "react"
import { View } from "react-native";
import { getCurrentLocation } from "../../../Utility/CurrentLocation";
import Map from "./Map";
import DetailAndHelp from "../../../Utility/MyDetailsAndHelp/MyDetails&Help";
const NearBySOS = () => {
  const [help, setHelp] = useState(false)
  const [myCords, setMyCords] = useState();
  const helpCords = {}
  const callCurrentLocation = async () => {
    const cords = await getCurrentLocation()
    console.log(cords)
    setMyCords(
      cords
    )
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
        <DetailAndHelp myCords={myCords} />
        <Map myCords={myCords} helpCords={helpCords} help={help} />
      </>
    }
    </>
  );
}
export default NearBySOS