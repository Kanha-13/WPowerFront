import React, { useRef } from "react";
import { Animated } from "react-native";
import { Dimensions, PixelRatio } from 'react-native';
import { getNextState, animateMove } from "./helper";
import { PanResponder } from "react-native";
import { Text, View } from 'react-native';
import { DrawerState } from "./Constants";
//vertical Map Drawer
const VMD = (props) => {
  const { height } = Dimensions.get('window');
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
          height: height - 107,
          borderRadius: 20,
          backgroundColor: '#DA7F8F',
          transform: [{ translateY: y }],
          marginTop: 745,
        },
      ]}
      {...panResponder.panHandlers}>
      <View style={{
        width: 35,
        height: 7,
        backgroundColor: "#D3D3D3",
        alignSelf: "center",
        borderRadius: 5,
        marginVertical: 20,
      }}></View>
      <Text>Helloo</Text>
      {props.children}
    </Animated.View>
  );
}

export default VMD;
