import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window")
export const style = {
  mainContaienr: {
    height: height * 0.93,
    width: width,
    justifyContent: "center"
  }
}