import React, { useEffect } from 'react'
import Drawer from './Drawer/DrawerPallate';
import Home from './src/Screens/Home/Home';
import { StatusBar } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import Profile from './src/Screens/Profile';
const App = () => {
  return (
    <NativeRouter>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle="dark-content" type="dark" />
      <Drawer>
        <Route exact path={`/`} component={Home} />
        <Route exact path={`/Home`} component={Home} />
        <Route exact path={`/Profile`} component={Profile} />
      </Drawer>
    </NativeRouter>
  );
}
export default App;