import React, { useEffect, useRef, useState } from "react";
import { getCurrentLocation } from "../Location";
import { permissionsManager } from "./permissionsManager";

export const StateContext = React.createContext();
const StateProvide = (props) => {
  const mapRef = useRef()
  const [myCords, setMyCords] = useState({
    // latitudeDelta: 45.0254,
    // longitudeDelta: 15.684,
  })

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
        myCords
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
}
export default StateProvide;
