import React, { useEffect, useState, useRef } from "react"
import { View } from "react-native";
import Map from "./Map";
import DetailAndHelp from "../../../Utility/MyDetailsAndHelp/MyDetails&Help";
const NearBySOS = ({ familyLocation }) => {
  const [help, setHelp] = useState(false)
  const helpCords = {}
  return (
    <>
      <DetailAndHelp />
      <Map helpCords={helpCords} help={help} familyLocation={familyLocation} />
    </>
  );
}
export default NearBySOS