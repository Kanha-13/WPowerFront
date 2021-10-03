import React, { useState } from 'react'
import { StatusBar } from 'react-native';
import { NativeRouter, Route } from "react-router-native";
//screens
import Drawer from './Drawer/DrawerPallate';
import Home from './src/Screens/Home';
import NearBySOS from './src/Screens/NearBySOS';
import Profile from './src/Screens/Profile';
import MyAccount from './src/Screens/MyAccount';
import MyGuardian from './src/Screens/MyGuardian';
import Settings from './src/Screens/Settings';
import StateProvide from './Utility/StateProvider';
// import { liveFamilyLocation } from './socket_transport'
window.navigator.userAgent = 'react-native';
const App = () => {
  const [currentNavigation, setCurrentNavigation] = useState('Home')
  const [currentTab, setCurrentTab] = useState('Home')

  return (
    <StateProvide>
      <NativeRouter>
        <StatusBar backgroundColor="transparent" translucent={true} barStyle="dark-content" type="dark" />
        <Drawer currentTab={currentTab} setCurrentTab={setCurrentTab} setCurrentNavigation={setCurrentNavigation} currentNavigation={currentNavigation}>
          <Route exact path={`/`} component={() => <Home />} />
          <Route exact path={`/Home`} component={() => <Home />} />
          <Route exact path={`/Profile`} component={Profile} />
          <Route exact path={`/MyAccount`} component={() => <MyAccount setCurrentTab={setCurrentTab} />} />
          <Route exact path={`/MyGuardian`} component={MyGuardian} />
          <Route exact path={`/Settings`} component={Settings} />
          <Route exact path={`/NearBySOS`} component={() => <NearBySOS />} />
        </Drawer>
      </NativeRouter>
    </StateProvide>
  );
}
export default App;