import React, { useRef } from "react";
import { Animated } from "react-native";
import { Dimensions, PixelRatio } from 'react-native';
import { HorizontalLine } from "./HorizontalLine";
import { getNextState, animateMove } from "./helper";
import { PanResponder } from "react-native";
import { Text } from 'react-native';
//vertical Map Drawer
const VMD = (props) => {
  const { height } = Dimensions.get('window');
  const DrawerState = {
    Open: height - 230,
    Peek: 30,
    Closed: 0,
  }
  const y = useRef(new Animated.Value(DrawerState.Closed)).current;
  const state = useRef(new Animated.Value(DrawerState.Closed)).current;
  const margin = 0.05 * height;
  const movementValue = (moveY) => height - moveY;
  //=========================================================================


  const onPanResponderMove = (_, _a) => {
    var moveY = _a.moveY;
    var val = movementValue(moveY);
    animateMove(y, val);
  };

  const onPanResponderRelease = (_, _a) => {
    var moveY = _a.moveY;
    var valueToMove = movementValue(moveY);
    var nextState = getNextState(state._value, valueToMove, margin);
    state.setValue(nextState);
    animateMove(y, nextState);
  };

  const onMoveShouldSetPanResponder = (_, _a) => {
    var dy = _a.dy;
    return Math.abs(dy) >= 10;
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder,
      onStartShouldSetPanResponderCapture: onMoveShouldSetPanResponder,
      onPanResponderMove,
      onPanResponderRelease,
    }),
  ).current;

  return (
    <Animated.View
      style={[
        {
          zIndex: 100,
          width: '100%',
          height: height - 90,
          borderRadius: 20,
          backgroundColor: '#DA7F8F',

          // position: 'absolute',
          // bottom: -height,
          transform: [{ translateY: y }],
          marginTop: 645,
        },
      ]}
      {...panResponder.panHandlers}>
      <HorizontalLine />
      <Text>Helloo</Text>
      {/* <HorizontalLine />
      <HorizontalLine /> */}
      {props.children}
    </Animated.View>
  );
}

export default VMD;
