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
  buttonContainer: {
    alignItems: "center",
    width: width,
    height: "30%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    zIndex: -1
  },
  buttons: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    height: "90%",
    width: "45%"
  },
  helpContainer: {
    width: "50%",
    height: "30%",
    borderColor: "#C6CDCE",
    borderWidth: 5,
    borderRadius: 100,
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute"
  }
}