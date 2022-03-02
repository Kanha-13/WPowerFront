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
  const [helpCords, setHelpCords] = useState([{ id: "testing added", cords: { latitude: 21.14462, longitude: 81.37356 } }])
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
    await generateSOS(socket, DeviceState.phoneNumber)
  }
  const getData = async () => {
    //check for local storage
    let oldLocation = await AsyncStorage.getItem('oldLocation')
    if (oldLocation === null) {
    } else {
      setMyCords(JSON.parse(oldLocation))
    }
    //then fetch device details
    await getDeviceState()

  }
  useEffect(() => {
    //Start here first create socket
    getData();
  }, [])

  useEffect(() => {
    if (DeviceState.phoneNumber.length && myCords.latitude) {
      setSocket(makeConnection(DeviceState.phoneNumber, myCords));
    }
  }, [DeviceState])

  useEffect(() => {
    //then get location cords continuously
    const interval = setInterval(async () => {
      try {
        const cords = await getCurrentLocation()
        setMyCords(cords)
        await AsyncStorage.setItem('oldLocation', JSON.stringify(cords))
      } catch (error) {
        console.log(error)
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (socket) {
      socket.on("help", (payload) => {
        const changingIndex = helpCords.filter((helpcord, index) => {
          if (helpcord.id === payload.id) {
            return index
          }
        })
        if (changingIndex.length) {
          setHelpCords([...helpCords, helpCords[changingIndex].cords = payload.cords])
        } else {
          setHelpCords([...helpCords, { id: payload.id, cords: payload.cords }])
        }
      })
      socket.on("iamsafe", (payload) => {
        setHelpCords(helpCords.filter(helpcord => helpcord.id !== payload.id))
      })
    }
  }, [socket])
  return (
    <StateContext.Provider
      value={{
        helpCalled,
        helpCords,
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
