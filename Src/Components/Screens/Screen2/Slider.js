import React, { useRef } from "react";
import { Animated } from "react-native";
import { Dimensions, PixelRatio } from 'react-native';
import { getNextState, animateMove } from "./helper";
import { PanResponder } from "react-native";
import { Text, View } from 'react-native';
import { DrawerState } from "./Constants";
//vertical Map Drawer
const Slider = (props) => {
  const { height, width } = Dimensions.get('window');
  const y = useRef(new Animated.Value(DrawerState.Closed)).current;
  const state = useRef(new Animated.Value(DrawerState.Closed)).current;
  const margin = 0.05 * height;
  const movementValue = (moveY) => height - moveY;
  //=========================================================================

  const onPanResponderMove = (_, _a) => {
    console.log("moving");
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
          top: height - height * 0.13,
          width: width,
          height: height - 25,
          borderRadius: 20,
          backgroundColor: "#E1E5EA",
          position: "absolute",
          zIndex: 30,
          transform: [{ translateY: y }],
        },
      ]}
      {...panResponder.panHandlers}>
      <View style={{
        width: 40,
        height: 7,
        backgroundColor: "#A4A4A4",
        alignSelf: "center",
        borderRadius: 5,
        marginVertical: 20,
      }}></View>
      {props.children}
    </Animated.View>
  );
}

export default Slider;