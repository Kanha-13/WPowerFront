import React from 'react'
//Menu option
import menu from '../assets/menu.png'
import { View, TouchableOpacity, Image, Text, Animated } from 'react-native';
const MainScreenHeader = ({ currentTab, closeButtonOffset, scaleValue, offsetValue, showMenu, setShowMenu }) => {
  return (
    <>
      <View style={{
        // backgroundColor: "#E1E5EA",
        // backgroundColor: '#DA7F8F',
        backgroundColor: "#000000",
        borderRadius: 10,
        borderTopStartRadius: 0,
        top: 33,
        marginLeft: 2,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        height: 40,
        width: 50,
        flexDirection: "row",
        justifyContent: "center"
      }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: 60,
          }}
          onPress={() => {
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
            marginTop: 10,
            width: 30,
            height: 30,
            alignSelf: "center",
            transform: !showMenu ? [
              {
                rotate: '180deg'
              }
            ] : [],
            // tintColor: "black",
          }} ></Image>
        </TouchableOpacity>
      </View>
    </>
  );
}
export default MainScreenHeader;