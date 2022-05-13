import React, { useEffect, useRef, useState } from "react";
import { getCurrentLocation } from "../Location";
import { permissionsManager } from "./permissionsManager";

export const StateContext = React.createContext();

const StateProvide = (props) => {
  const [isUserSignedIn, setUserSignedIn] = useState(false)
  const [myCords, setMyCords] = useState({})
  const mapRef = useRef()
  const onLogout = () => {
    setUserSignedIn(false)
  }
  const onVerify = () => {
    setUserSignedIn(true)
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
        onLogout
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
}
export default StateProvide;
