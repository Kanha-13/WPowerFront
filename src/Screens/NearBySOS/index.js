import React, { useEffect, useState, useRef, useContext } from "react"
import { View } from "react-native";
import Map from "./Map";
// import DetailAndHelp from "../../../Utility/MyDetailsAndHelp/MyDetails&Help";
import { generateSOS } from "../../../socket_transport";
import { StateContext } from "../../../Utility/StateProvider";
const NearBySOS = () => {
  const State = useContext(StateContext)
  const { socket } = State
  const [helpCords, setHelpCords] = useState({})
  const callSOS = async () => {
    await generateSOS(socket)
  }


  return (
    <>
      {/* <DetailAndHelp callSOS={callSOS} /> */}
      <Map helpCords={helpCords} />
    </>
  );
}
export default NearBySOS