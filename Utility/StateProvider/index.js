import React, { useEffect, useRef, useState } from "react";
import makeConnection from "../../socketConfig";
import { generateSOS } from "../../socket_transport";
import { getCurrentLocation } from "../CurrentLocation";
import AsyncStorage from '@react-native-async-storage/async-storage';
import fetchMyDeviceStatus from "../fetchMyDeviceStatus";

export const StateContext = React.createContext();
const StateProvide = (props) => {
  const [socket, setSocket] = useState();
  const [helpCalled, setHelpCalled] = useState(false)
  const mapRef = useRef()
  const [myCords, setMyCords] = useState({
    latitudeDelta: 45.0254,
    longitudeDelta: 15.684,
  })
  const [DeviceState, setDeviceState] = useState({
    phoneNumber: "",
    brand: "",
    powerState: { batteryLevel: "", batteryState: "", lowPowerMode: true },
    fingerPrint: "", mnf: "", ipAdd: "", uniqueId: "", carrier: "",
  })
  const getDeviceState = async () => {
    const details = await fetchMyDeviceStatus()
    setDeviceState(details)
  }
  const callSOS = async () => {
    await generateSOS(socket)
  }

  useEffect(async () => {
    //Start here first create socket
    setSocket(makeConnection());

    //check for local storage
    let oldLocation = await AsyncStorage.getItem('oldLocation')
    if (oldLocation === null) {
    } else {
      setMyCords(JSON.parse(oldLocation))
    }

    //then fetch device details
    await getDeviceState()
  }, [])

  useEffect(async () => {
    let mounted = true;
    //then get location cords continuously
    const interval = setInterval(async () => {
      try {
        console.log("called")
        const cords = await getCurrentLocation()
        setMyCords(cords)
        await AsyncStorage.setItem('oldLocation', JSON.stringify(cords))
      } catch (error) {
        console.log(error)
      }
    }, 4000)

    mounted = false;
    return () => clearInterval(interval)
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

  // useEffect(()=>{

  // },[])

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
        myCords,
        DeviceState
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
}
export default StateProvide;
