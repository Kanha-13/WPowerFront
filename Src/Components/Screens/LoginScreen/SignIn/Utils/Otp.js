import React from "react";
import { View, TextInput, Pressable, Text } from "react-native";

const Otp = ({ onChange, checkOtp, otp }) => {
  return (
    <View style={{ paddingHorizontal: 20, justifyContent: "space-between", flex: 1 }}>
      <View>
        <Text style={{ color: "#000000", marginTop: 60, fontSize: 20, marginLeft: 10, marginBottom: 5 }} >OTP</Text>
        <TextInput autoFocus={true} onChangeText={(text) => onChange(text)}
          style={{ borderWidth: 2, color: "#000000", borderRadius: 5, paddingHorizontal: 10 }}
          placeholderTextColor="#000000" placeholder="Enter otp" />
      </View>
      <Pressable disabled={otp === "" ? true : false} style={{
        borderRadius: 5, backgroundColor: "#673ab7",
        height: 45, justifyContent: "center",
        alignItems: "center", marginBottom: 30, width: 90, alignSelf: "flex-end"
      }}
        android_ripple={{ color: "gray" }} onPress={checkOtp}>
        <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 18 }}>Submit</Text>
      </Pressable>
    </View>
  );
}
export default Otp;