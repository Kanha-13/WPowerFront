import React, { useState, useEffect } from 'react'
import getMyDetails from './Utility/fetchProfileDetails';
import { StatusBar } from 'react-native';
import { NativeRouter, Route } from "react-router-native";
import { getCurrentLocation } from "./Utility/CurrentLocation"
//screens
import Drawer from './Drawer/DrawerPallate';
import Home from './src/Screens/Home';
import NearBySOS from './src/Screens/NearBySOS';
import Profile from './src/Screens/Profile';
import MyAccount from './src/Screens/MyAccount';
import MyGuardian from './src/Screens/MyGuardian';
import Settings from './src/Screens/Settings';
const App = () => {
  const [myCords, setMyCords] = useState();
  const callCurrentLocation = async () => {
    setMyCords(
      await getCurrentLocation()
    )
  }
  useEffect(() => {
    // const interval = setInterval(() => {
    callCurrentLocation()
    // }, 4000);
    // return () => clearInterval(interval)
  }, [])
  const [currentNavigation, setCurrentNavigation] = useState('Home')
  const { mydetails } = async () => await getMyDetails()
  const [currentTab, setCurrentTab] = useState('Home')
  if (!mydetails) {
  } else { }
  return (
    <NativeRouter>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle="dark-content" type="dark" />
      <Drawer currentTab={currentTab} setCurrentTab={setCurrentTab} setCurrentNavigation={setCurrentNavigation} currentNavigation={currentNavigation}>
        <Route exact path={`/`} component={() => <Home myCords={myCords} />} />
        <Route exact path={`/Home`} component={() => <Home myCords={myCords} />} />
        <Route exact path={`/Profile`} component={Profile} />
        <Route exact path={`/MyAccount`} component={() => <MyAccount currentTab={currentTab} setCurrentTab={setCurrentTab} />} />
        <Route exact path={`/MyGuardian`} component={MyGuardian} />
        <Route exact path={`/Settings`} component={Settings} />
        <Route exact path={`/NearBySOS`} component={() => <NearBySOS myCords={myCords} />} />
      </Drawer>
    </NativeRouter>
  );
}
export default App;