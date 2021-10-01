import React, { useEffect, useState, useRef } from "react"
import { View } from "react-native";
import Map from "./Map";
import DetailAndHelp from "../../../Utility/MyDetailsAndHelp/MyDetails&Help";
import { generateSOS } from "../../../socket_transport";

const NearBySOS = ({ socket, familyLocation }) => {
  const [helpCords, setHelpCords] = useState({})
  const callHelp = async () => {
    await generateSOS(socket)
  }
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