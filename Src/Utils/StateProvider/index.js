import React, { useEffect, useRef, useState } from "react";
import { getCurrentLocation } from "../Location";
import { permissionsManager } from "./permissionsManager";
import { MakeConnection } from '../../Utils/Sockets';

const StateProvide = (props) => {
  const [isUserSignedIn, setUserSignedIn] = useState(false)
  const [myCords, setMyCords] = useState({})
  const [mySocket, setMySocket] = useState(null)
  const [allHelpRequests, setAllHelpReq] = useState({})
  const mapRef = useRef()
  const onLogout = () => {
    setUserSignedIn(false)
  }
  const onVerify = () => {
    setUserSignedIn(true)
  }


  const callback = (ws) => {
    setMySocket(ws)
  }

  const onRecieveHelpReq = (requests) => {
    setAllHelpReq(requests)
  }
  const onRecieveSafeRequest = (request) => {
    delete allHelpRequests[`${request.phoneNumber}`]
    setAllHelpReq(allHelpRequests)
  }
  const establishConnection = async () => {
    try {
      MakeConnection(callback, onRecieveHelpReq, onRecieveSafeRequest)
    } catch (error) {
      alert("Server is offline")
    }
  }


  useEffect(() => {
    permissionsManager();
    // const interval = setInterval(async () => {
    //   try {
    //     const cords = await getCurrentLocation()
    //     setMyCords(cords)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }, 4000)
    // return () => clearInterval(interval)
  }, [])
  return (
    <StateContext.Provider
      value={{
        mapRef,
        myCords,
        onVerify,
        isUserSignedIn,
        onLogout,
        establishConnection,
        mySocket,
        allHelpRequests
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
}
export const StateContext = React.createContext();
export default StateProvide;
