import React, { useRef, useState } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import MainScreenHeader from './DefaultScreenHeader';
import { SafeAreaView, View, Animated } from 'react-native';
import BottomNavigation from './BottomNavigation';
import { styles } from './Utility/Css/index.style';
const Drawer = (props) => {
  const { currentTab, setCurrentTab } = props
  const [showMenu, setShowMenu] = useState(false);
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.sidebar}>
        <Header setShowMenu={setShowMenu} setCurrentTab={setCurrentTab} />
        <Body currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <Footer currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </View>
      <Animated.View style={[styles.animationContainer, { borderRadius: showMenu ? 15 : 0, transform: [{ translateX: offsetValue }, { translateY: closeButtonOffset },], }]}>
        <Animated.View>
          <MainScreenHeader
            currentTab={currentTab}
            offsetValue={offsetValue}
            scaleValue={scaleValue}
            closeButtonOffset={closeButtonOffset}
            showMenu={showMenu} setShowMenu={setShowMenu}
          />
          {props.children}
          <BottomNavigation currentTab={currentTab} setCurrentTab={setCurrentTab} setCurrentNavigation={props.setCurrentNavigation} currentNavigation={props.currentNavigation} />
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Drawer;
