import React, { useEffect, useState, useRef } from "react"
import { View } from "react-native";
import Map from "./Map";
import DetailAndHelp from "../../../Utility/MyDetailsAndHelp/MyDetails&Help";

const NearBySOS = ({ callHelp, socket, familyLocation }) => {
  const [helpCords, setHelpCords] = useState({})
  useEffect(() => {
    socket.on("help", (payload) => {
      console.log("got help")
      console.log(payload)
      setHelpCords(payload)
    })
  }, [])

  return (
    <>
      <DetailAndHelp callHelp={callHelp} />
      <Map helpCords={helpCords} socket={socket} familyLocation={familyLocation} />
    </>
  );
}
export default NearBySOS