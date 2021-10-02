import React, { useEffect, useState, useRef } from "react"
import { View } from "react-native";
import Map from "./Map";
import DetailAndHelp from "../../../Utility/MyDetailsAndHelp/MyDetails&Help";

const NearBySOS = ({ callHelp, socket, familyLocation }) => {
  const [helpCords, setHelpCords] = useState({})
  useEffect(() => {
    let mounted = true;
    if (socket) {
      socket.on("help", (payload) => {
        setHelpCords(payload)
      })
    }
    mounted = false
  }, [socket])

  return (
    <>
      <DetailAndHelp callHelp={callHelp} />
      <Map helpCords={helpCords} socket={socket} familyLocation={familyLocation} />
    </>
  );
}
export default NearBySOS