import { StyleSheet, Animated, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: '#000000',
    alignItems: "flex-start",
    zIndex: -1,
  },
  sidebar: {
    padding: "5%",
  },
  animationContainer: {
    backgroundColor: '#A7BBC7',
    position: "absolute",
    justifyContent: "space-between",
    height: height,
    width: width,
    zIndex: 1,
  },
});