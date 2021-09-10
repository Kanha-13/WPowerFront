import React from 'react'
//Menu option
import menu from '../assets/menu.png'
import { View, TouchableOpacity, Image, Text, Animated } from 'react-native';
const MainScreenHeader = ({ currentTab, closeButtonOffset, scaleValue, offsetValue, showMenu, setShowMenu }) => {
  return (
    <>
      <View style={{
        // backgroundColor: "#E1E5EA",
        backgroundColor: '#DA7F8F',
        borderRadius: 10,
        top: 30,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        paddingHorizontal: 10,
        height: 50,
        width: "100%",
        flexDirection: "row"
      }}>
        <TouchableOpacity style={{ height: 40, width: 50, marginLeft: 10, alignItems: "center" }} onPress={() => {
          //Do actions here
          //scaling the view
          Animated.timing(scaleValue, {
            toValue: showMenu ? 1 : 0.12,
            duration: 300,
            useNativeDriver: true,
          }).start()
          Animated.timing(offsetValue, {
            toValue: showMenu ? 0 : 250,
            duration: 300,
            useNativeDriver: true,
          }).start()
          Animated.timing(closeButtonOffset, {
            toValue: !showMenu ? 30 : 0,
            duration: 300,
            useNativeDriver: true,
          }).start()
          setShowMenu(!showMenu)
        }}>
          <Image source={menu} style={{
            width: 30,
            height: 40,
            alignSelf: "center",
            transform: showMenu ? [
              {
                rotate: '180deg'
              }
            ] : [],
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