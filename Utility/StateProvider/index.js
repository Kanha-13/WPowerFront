import React, { useEffect, useRef, useState } from "react";
import makeConnection from "../../socketConfig";
import { generateSOS } from "../../socket_transport";
export const StateContext = React.createContext();
const StateProvide = (props) => {
  const [socket, setSocket] = useState();
  const [helpCalled, setHelpCalled] = useState(false)
  const [myCords, setMyCords] = useState({})
  const mapRef = useRef()
  const [] = useState(false);
  const callSOS = async () => {
    await generateSOS(socket)
  }
  useEffect(() => {
    setSocket(makeConnection());
  }, [])


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
    <StateContext.Provider
      value={{
        helpCalled,
        setHelpCalled,
        mapRef,
        myCords,
        setMyCords,
        socket,
        callSOS,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
}
export default StateProvide;
