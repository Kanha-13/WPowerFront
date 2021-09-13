import React from "react";
import { StyleSheet, View, Text } from "react-native";
import DetailAndHelp from "../../../Utility/MyDetailsAndHelp/MyDetails&Help";
const Home = () => {
  return (
    <View style={{
      height: "96%",
    }} >
      <View style={{
        backgroundColor: "#ffffff",
        marginTop: "30%",
        borderRadius: 15,
      }} >
        <Text>Welcome to Home Screen</Text>
        {/* <DetailAndHelp /> */}

      </View>
    </View>
  );
}
export default Home;