import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import profile from '../assets/kanha.jpg'
//Tab icons
import home from '../assets/home.png'
import notification from '../assets/home.png'
import search from '../assets/home.png'
import setting from '../assets/home.png'
import logout from '../assets/home.png'
//Menu option
import menu from '../assets/home.png'
import close from '../assets/home.png'

const Drawer = (props) => {
  const [currentTab, setCurrentTab] = useState('Home')

  //To get the current status of menu...
  const [showMenu, setShowMenu] = useState(false);

  //Annimated properties
  const offsetValue = useRef(new Animated.Value(0)).current;

  //Initally scale value should be 1
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container} >
      <View style={{ justifyContent: "flex-start", padding: 15 }}>
        <Image source={profile} style={{ width: 60, height: 60, borderRadius: 10, marginTop: 10 }} ></Image>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: "white", marginTop: 20 }}>Kanha Agrawal</Text>
        <TouchableOpacity>
          <Text style={{ marginTop: 6, color: "white" }}>View Profile</Text>
        </TouchableOpacity>
        <View style={{ flexGrow: 1, marginTop: 50 }} >
          {
            //tab bar butrtons....
          }
          {TabButton(currentTab, setCurrentTab, "Home", home)}
          {TabButton(currentTab, setCurrentTab, "Search", search)}
          {TabButton(currentTab, setCurrentTab, "Notification", notification)}
          {TabButton(currentTab, setCurrentTab, "Settings", setting)}
        </View>

        <View>
          {TabButton(currentTab, setCurrentTab, "Logout", logout)}
        </View>
      </View>
      {
        //over lay view
      }
      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: showMenu ? 15 : 0,
        transform: [
          { scale: scaleValue }, { translateX: offsetValue },
        ],


      }}>
        {
          //Menu Button..
        }
        <Animated.View style={{
          transform: [{ translateY: closeButtonOffset }]
        }}>
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
          {props.children}
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};
//for multiple buttons
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (
    <TouchableOpacity onPress={() => {
      if (title == "Logout") {
        //logout event
      }
      else {
        setCurrentTab(title)
      }
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        backgroundColor: currentTab == title ? "white" : "transparent",
        borderRadius: 8,
        paddingLeft: 13,
        paddingRight: 35,
        marginTop: 10
      }}>
        <Image source={image} style={{
          height: 20,
          width: 25,
          tintColor: currentTab == title ? '#5359D1' : 'white',
        }}></Image>
        <Text style={{
          fontSize: 15,
          fontWeight: "bold",
          paddingLeft: 15,
          color: currentTab == title ? '#5359D1' : 'white',
        }}>{title}</Text>
      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5359D1',
    alignItems: "flex-start",
    justifyContent: "flex-start",
  }
});

export default Drawer;
