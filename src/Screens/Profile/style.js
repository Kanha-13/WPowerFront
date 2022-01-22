import { Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');

export const style = {
  containerWrapper: {
    height: height * 0.93,
  },
  container: {
    backgroundColor: "#C6CDCE",
    width: width,
    borderRadius: 20,
    justifyContent: "center",
    height: "85%",
    marginTop: "33%"
  },
}