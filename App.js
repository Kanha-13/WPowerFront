import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Screen1 from './Src/Components/Screens/Screen1';
import Screen2 from './Src/Components/Screens/Screen2';
import Screen3 from './Src/Components/Screens/Screen3';
import BottomNavigation from './Src/Utils/BottomNavigation';
const App = () => {
  return (
    <View style={{ backgroundColor: "red", height: "100%", width: "100%" }}>
      <BottomNavigation initialRoute="Screen1" >
        <Screen1 />
        <Screen2 />
        <Screen3 />
      </BottomNavigation>
    </View >
  );
}


export default App;
