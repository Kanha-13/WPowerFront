import React, { useState, useEffect, useRef } from 'react'
import makeConnection from './socketConfig';
import getMyDetails from './Utility/fetchProfileDetails';
import { StatusBar } from 'react-native';
import { NativeRouter, Route } from "react-router-native";
import { getCurrentLocation } from "./Utility/CurrentLocation"
import { generateSOS } from './socket_transport';
//screens
import Drawer from './Drawer/DrawerPallate';
import Home from './src/Screens/Home';
import NearBySOS from './src/Screens/NearBySOS';
import Profile from './src/Screens/Profile';
import MyAccount from './src/Screens/MyAccount';
import MyGuardian from './src/Screens/MyGuardian';
import Settings from './src/Screens/Settings';
// import { liveFamilyLocation } from './socket_transport'
window.navigator.userAgent = 'react-native';
const App = () => {
  const [shareMyLocation, setShareMyLocation] = useState(false);
  const [socket, setSocket] = useState({});
  const [familyLocation, setFamilyLocation] = useState();
  const [currentNavigation, setCurrentNavigation] = useState('Home')
  const { mydetails } = async () => await getMyDetails()
  const [currentTab, setCurrentTab] = useState('Home')

  const callHelp = async () => {
    setShareMyLocation(true)
  }
  useEffect(async () => {
    if (shareMyLocation) {
      await generateSOS(socket)
    }
  }, [shareMyLocation])

  useEffect(() => {
    setSocket(makeConnection());
  }, [])

  return (
    <NativeRouter>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle="dark-content" type="dark" />
      <Drawer currentTab={currentTab} setCurrentTab={setCurrentTab} setCurrentNavigation={setCurrentNavigation} currentNavigation={currentNavigation}>
        <Route exact path={`/`} component={() => <Home socket={socket} />} />
        <Route exact path={`/Home`} component={() => <Home socket={socket} />} />
        <Route exact path={`/Profile`} component={Profile} />
        <Route exact path={`/MyAccount`} component={() => <MyAccount currentTab={currentTab} setCurrentTab={setCurrentTab} />} />
        <Route exact path={`/MyGuardian`} component={MyGuardian} />
        <Route exact path={`/Settings`} component={Settings} />
        <Route exact path={`/NearBySOS`} component={() => <NearBySOS callHelp={callHelp} socket={socket} familyLocation={familyLocation} />} />
      </Drawer>
    </NativeRouter>
  );
}
export default App;