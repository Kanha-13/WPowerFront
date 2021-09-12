import React, { useRef, useState } from 'react';
import TabButton from './Utility/TabButtonTamplate';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import MainScreenHeader from './DefaultScreenHeader';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
} from 'react-native';

const Drawer = (props) => {
  const { currentTab, setCurrentTab } = props
  //To get the current status of menu...
  const [showMenu, setShowMenu] = useState(false);

  //Annimated properties
  const offsetValue = useRef(new Animated.Value(0)).current;

  //Initally scale value should be 1
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={styles.container} >
      <View style={{ justifyContent: "flex-start", padding: 0 }}>
        <Header setShowMenu={setShowMenu} setCurrentTab={setCurrentTab} />
        <Body currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <Footer currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </View>
      {
        //over lay view
      }
      {
        //home screen ka container
      }
      <Animated.View style={{
        flexGrow: 1,
        // backgroundColor: "white",
        backgroundColor: '#A7BBC7',
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        borderRadius: showMenu ? 15 : 0,
        overflow: "hidden",
        transform: [
          // { scale: scaleValue }, { translateX: offsetValue },
          { translateX: offsetValue }, { translateY: closeButtonOffset },
        ],


      }}>

        <Animated.View style={{
          // transform: [{ translateY: closeButtonOffset }],
          // backgroundColor: "white",
          // height: "100%"
        }}>
          <MainScreenHeader
            currentTab={currentTab}
            offsetValue={offsetValue}
            scaleValue={scaleValue}
            closeButtonOffset={closeButtonOffset}
            showMenu={showMenu} setShowMenu={setShowMenu}
          />
          {props.children}
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    // backgroundColor: '#A7BBC7',
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 15,
    paddingLeft: 20,
  }
});

export default Drawer;
