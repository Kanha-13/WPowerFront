import React, { useEffect, useState, useRef } from "react"
import { View } from "react-native";
import Map from "./Map";
import DetailAndHelp from "../../../Utility/MyDetailsAndHelp/MyDetails&Help";
const NearBySOS = ({ myCords }) => {
  const [help, setHelp] = useState(false)
  const helpCords = {}

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