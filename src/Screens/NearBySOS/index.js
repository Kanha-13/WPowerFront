import React, { useEffect, useState, useRef } from "react"
import { View } from "react-native";
import Map from "./Map";
import DetailAndHelp from "../../../Utility/MyDetailsAndHelp/MyDetails&Help";

const NearBySOS = ({ callHelp, socket, familyLocation }) => {
  const [helpCords, setHelpCords] = useState({})
  useEffect(() => {
    if (socket) {
      socket.on("help", (payload) => {
        setHelpCords(payload)
      })
    }
  }, [socket])

  return (
    <>
      <DetailAndHelp callHelp={callHelp} />
      <Map helpCords={helpCords} socket={socket} familyLocation={familyLocation} />
    </>
  );
}
export default NearBySOS