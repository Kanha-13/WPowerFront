import { Animated } from "react-native";
import { DrawerState } from "./Constants";
export const animateMove = (y, toValue, callback) => {
  Animated.spring(y, {
    tension: 6,
    toValue: -toValue,
    // tension: 0,
    useNativeDriver: true,
  }).start(function (finished) {
    finished && callback && callback();
  });
};
export const getNextState = (currentState, val, margin) => {
  // switch (currentState) {
  //   case DrawerState.Peek:
  //     return val >= currentState + margin ? DrawerState.Open : val <= DrawerState.Peek - margin ? DrawerState.Closed : DrawerState.Peek;
  //   case DrawerState.Open:
  //     return val >= currentState
  //       ? DrawerState.Open
  //       : val <= DrawerState.Peek
  //         ? DrawerState.Closed
  //         : DrawerState.Peek;
  //   case DrawerState.Closed:
  //     return val >= currentState + margin
  //       ? val <= DrawerState.Peek + margin
  //         ? DrawerState.Peek
  //         : DrawerState.Open
  //       : DrawerState.Closed;
  //   default:
  //     return currentState;
  // }
  switch (currentState) {
    case DrawerState.Peek:
      return val <= DrawerState.Peek - margin ? DrawerState.Closed : DrawerState.Peek;
    case DrawerState.Closed:
      return val >= currentState + margin ? DrawerState.Peek : DrawerState.Closed;
    default:
      return currentState;
  }
};
