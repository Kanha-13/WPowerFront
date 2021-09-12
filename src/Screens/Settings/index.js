import React, { useEffect } from "react";
import { View, Text } from "react-native";
const Settings = () => {
  useEffect(() => {
    console.log("Settings screen loaded")
  }, [])
  return (
    <View>
      <Text>Welcome in settings</Text>
    </View>
  );
}
export default Settings;