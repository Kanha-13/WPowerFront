import React, { useState } from 'react';
import { View } from 'react-native';
import Home from './Src/Components/Screens/Screen1';
import Map from './Src/Components/Screens/Screen2';
import Profile from './Src/Components/Screens/Screen3';
import SwipeTabs from './Src/Utils/SwipeTabsNavigation';
import StateProvide from './Src/Utils/StateProvider';
import LoginScreen from './Src/Components/Screens/LoginScreen';
const App = () => {
  const [valid, setValid] = useState(false)
  const onVerify = () => {
    setValid(true)
  }
  const onLogout = () => {
    setValid(false)
  }
  return (
    valid === true ?
      <StateProvide>
        <View style={{ height: "100%", width: "100%" }}>
          <SwipeTabs initialRoute="Home">
            <Home />
            <Map />
            <Profile />
          </SwipeTabs>
        </View >
      </StateProvide>
      : <LoginScreen onVerify={onVerify} onLogout={onLogout} />
  );
}


export default App;
