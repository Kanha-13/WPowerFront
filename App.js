import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Home from './Src/Components/Screens/Screen1';
import Map from './Src/Components/Screens/Screen2';
import Profile from './Src/Components/Screens/Screen3';
import BottomNavigation from './Src/Utils/BottomNavigation';
const App = () => {
  console.log(Home)
  return (
    <View style={{ backgroundColor: "red", height: "100%", width: "100%" }}>
      <BottomNavigation initialRoute="Home" >
        <Home />
        <Map />
        <Profile />
      </BottomNavigation>
    </View >
  );
}


export default App;
