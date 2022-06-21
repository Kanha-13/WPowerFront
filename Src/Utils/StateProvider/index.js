import React, { useEffect, useRef, useState } from "react";
import { getCurrentLocation } from "../Location";
import { permissionsManager } from "./permissionsManager";
import { MakeConnection } from '../../Utils/Sockets';
import { reverseGeoCoding } from '../../Utils/Location/address'
const StateProvide = (props) => {
  const [isUserSignedIn, setUserSignedIn] = useState(false);
  const [userData,setUserData]=useState({});
  const [myCords, setMyCords] = useState({});
  const [myAddress, setMyAddress] = useState({});
  const [mySocket, setMySocket] = useState(null);
  const [allHelpRequests, setAllHelpReq] = useState({});
  const mapRef = useRef();
  const onLogout = () => {
    setUserSignedIn(false)
  }
  const onVerify = () => {
    setUserSignedIn(true)
  }

  const updateuserdata=(label,value)=>{
    setUserData({...userData,[label]:value})
  }

  const callback = (ws) => {
    setMySocket(ws)
  }
  const getMyAddress = async () => {
    const cords = await getCurrentLocation()
    setMyCords(cords)
    const address = await reverseGeoCoding(cords)
    setMyAddress(address)
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
  const getUserData=async()=>{
    // const usedata= await user
    setUserData()
  }

  useEffect(()=>{
    getUserData()
  },[isUserSignedIn])

  useEffect(() => {
    getMyAddress()
    permissionsManager();
  }, [])
  return (
    <StateContext.Provider
      value={{
        mapRef,
        myCords,
        onVerify,
        isUserSignedIn,
        userData,
        updateuserdata,
        onLogout,
        establishConnection,
        mySocket,
        allHelpRequests,
        myAddress
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
}
export const StateContext = React.createContext();
export default StateProvide;
