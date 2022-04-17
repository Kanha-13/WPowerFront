import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Pressable } from 'react-native';
import Home from './Src/Components/Screens/Screen1';
import Map from './Src/Components/Screens/Screen2';
import Profile from './Src/Components/Screens/Screen3';
import BottomNavigation from './Src/Utils/BottomNavigation';
import SwipeTabs from './Src/Utils/SwipeTabsNavigation';
import Geolocation from '@react-native-community/geolocation';
const App = () => {
  const [myCords, setMyCords] = useState({
    latitude: 0,
    longitude: 0
  })
  useEffect(() => {
    // fetchLocation(setMyCords);
    const intervalId = setInterval(() => {
      Geolocation.getCurrentPosition(location => {
        // console.log(location)
        if (location.mocked) {
          alert('You have mocked the location please use real location')
        } else {
          setMyCords({ latitude: location.coords.latitude, longitude: location.coords.longitude })
        }
      })
    }, 1000);

    return () => clearInterval(intervalId);
  }, [])
  const mapRef = useRef();
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <SwipeTabs initialRoute="Home" myCords={myCords} >
        <Home />
        <Map myCords={myCords} mapRef={mapRef} />
        <Profile />
      </SwipeTabs>
    </View >
  );
}


export default App;
