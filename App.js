import React, { useState } from 'react'
import Drawer from './Drawer/DrawerPallate';
import Home from './src/Screens/Home/Home';
import { StatusBar } from 'react-native';
import { NativeRouter, Route } from "react-router-native";
import Profile from './src/Screens/Profile';
import getMyDetails from './Utility/fetchProfileDetails';
import MyAccount from './src/Screens/MyAccount';
import MyGuardian from './src/Screens/MyGuardian';
import Settings from './src/Screens/Settings';
const App = () => {
  const { mydetails } = async () => await getMyDetails()
  const [currentTab, setCurrentTab] = useState('Home')
  if (!mydetails) {
  } else { }
  return (
    <NativeRouter>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle="dark-content" type="dark" />
      <Drawer currentTab={currentTab} setCurrentTab={setCurrentTab}>
        <Route exact path={`/`} component={Home} />
        <Route exact path={`/Home`} component={Home} />
        <Route exact path={`/Profile`} component={Profile} />
        <Route exact path={`/MyAccount`} component={() => <MyAccount currentTab={currentTab} setCurrentTab={setCurrentTab} />} />
        <Route exact path={`/MyGuardian`} component={MyGuardian} />
        <Route exact path={`/Settings`} component={Settings} />
      </Drawer>
    </NativeRouter>
  );
}
export default App;