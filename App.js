import React from 'react';
import { View } from 'react-native';
import Home from './Src/Components/Screens/Screen1';
import Map from './Src/Components/Screens/Screen2';
import Profile from './Src/Components/Screens/Screen3';
import SwipeTabs from './Src/Utils/SwipeTabsNavigation';
import StateProvide from './Src/Utils/StateProvider';
import LoginScreen from './Src/Components/Screens/LoginScreen';
import StackNavigation from './Src/Utils/StackNavigation';
import SignIn from './Src/Components/Screens/LoginScreen/SignIn';
import SignUp from './Src/Components/Screens/LoginScreen/SignUp';
const App = () => {
  const AuthScreen = () => {
    return (
      <View style={{ height: "100%", width: "100%" }}>
        <SwipeTabs initialRoute="Home">
          <Home />
          <Map />
          <Profile />
        </SwipeTabs>
      </View >
    );
  }
  return (
    <StateProvide>
      <StackNavigation >
        <LoginScreen />
        <SignIn />
        <SignUp />
        <AuthScreen />
      </StackNavigation>
    </StateProvide>
  );
}


export default App;
