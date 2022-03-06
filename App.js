import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Home from './Src/Components/Screens/Screen1';
import Map from './Src/Components/Screens/Screen2';
import Profile from './Src/Components/Screens/Screen3';
import BottomNavigation from './Src/Utils/BottomNavigation';
import SwipeTabs from './Src/Utils/SwipeTabsNavigation';
const App = () => {
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <SwipeTabs initialRoute="Home" >
        <Home />
        <Map />
        <Profile />
      </SwipeTabs>
    </View >
  );
}


export default App;
