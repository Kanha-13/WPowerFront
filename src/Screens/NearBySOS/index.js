import React, { useEffect, useState, useRef } from "react"
import { View } from "react-native";
import Map from "./Map";
import DetailAndHelp from "../../../Utility/MyDetailsAndHelp/MyDetails&Help";
import { generateSOS } from "../../../socket_transport";

const NearBySOS = ({ socket, familyLocation }) => {
  const [helpCords, setHelpCords] = useState({})
  const callSOS = async () => {
    await generateSOS(socket)
  }
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
      <DetailAndHelp callSOS={callSOS} />
      <Map helpCords={helpCords} />
    </>
  );
}
export default NearBySOS