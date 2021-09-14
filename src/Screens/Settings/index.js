import React, { useEffect } from "react";
import { View, Text } from "react-native";
const Settings = () => {
  return (
    <View style={{
      paddingTop: 90,
    }}>
      <View style={{
        backgroundColor: "white",
        padding: 10,
        width: "100%",
        borderRadius: 20,
        alignSelf: "center",
        height: "97%",
      }}
      >
        <Text style={{
          fontSize: 20,
          alignSelf: "center",
        }}>Settings</Text>
      </View>
    </View>
  );
}
export default Settings;