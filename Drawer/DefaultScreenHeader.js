import React from 'react'
//Menu option
import menu from '../assets/home.png'
import close from '../assets/home.png'
import { View, TouchableOpacity, Image, Text, Animated } from 'react-native';
const MainScreenHeader = ({ currentTab, closeButtonOffset, scaleValue, offsetValue, showMenu, setShowMenu }) => {
  return (
    <>
      <View>
        <TouchableOpacity onPress={() => {
          //Do actions here
          //scaling the view
          Animated.timing(scaleValue, {
            toValue: showMenu ? 1 : 0.88,
            duration: 300,
            useNativeDriver: true,
          }).start()
          Animated.timing(offsetValue, {
            toValue: showMenu ? 0 : 300,
            duration: 300,
            useNativeDriver: true,
          }).start()
          Animated.timing(closeButtonOffset, {
            toValue: !showMenu ? -30 : 0,
            duration: 300,
            useNativeDriver: true,
          }).start()
          setShowMenu(!showMenu)
        }}>
          <Image source={showMenu ? close : menu} style={{
            width: 20,
            height: 20,
            tintColor: "black",
            marginTop: 40,
          }} ></Image>

        </TouchableOpacity>

      </View>
      <Text style={{
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
        paddingTop: 20,
        // }}>{currentTab}</Text>
      }}>{currentTab}</Text>
    </>
  );
}
export default MainScreenHeader;