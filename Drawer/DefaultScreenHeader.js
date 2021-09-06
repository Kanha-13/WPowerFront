import React from 'react'
//Menu option
import menu from '../assets/home.png'
import close from '../assets/home.png'
import { View, TouchableOpacity, Image, Text, Animated } from 'react-native';
import { HorizontalLine } from '../src/Screens/VerticalMapDrawer/HorizontalLine';
const MainScreenHeader = ({ currentTab, closeButtonOffset, scaleValue, offsetValue, showMenu, setShowMenu }) => {
  return (
    <>
      <View style={{
        backgroundColor: "#E1E5EA",
        borderRadius: 10,
        top: 30,
        display: "flex",
        alignItems: "center",
        paddingHorizontal: 10,
        height: 50,
        flexDirection: "row"
      }}>
        <TouchableOpacity style={{ height: 30, width: 30, marginLeft: 10 }} onPress={() => {
          //Do actions here
          //scaling the view
          Animated.timing(scaleValue, {
            toValue: showMenu ? 1 : 0.90,
            duration: 300,
            useNativeDriver: true,
          }).start()
          Animated.timing(offsetValue, {
            toValue: showMenu ? 0 : 250,
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
            width: 30,
            height: 30,
            alignSelf: "center",
            tintColor: "black",
          }} ></Image>
        </TouchableOpacity>

        <Text style={{
          fontSize: 25,
          fontWeight: "bold",
          color: "black",
          marginLeft: 20
        }}>{currentTab}</Text>
      </View>
    </>
  );
}
export default MainScreenHeader;