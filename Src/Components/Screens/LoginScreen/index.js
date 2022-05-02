import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Dimensions, TextInput, StyleSheet } from 'react-native'
import auth from '@react-native-firebase/auth'
const LoginScreen = ({ onVerify, onLogout, navigate }) => {
  const { height, width } = Dimensions.get("screen")
  const checkUser = () => {
    try {
      auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(user)
          // checkUser(user.phoneNumber, navigate, LoginType)
          onVerify();
        }
        else {
          // setLoginType(-1)
          onLogout()
        }
      });
    } catch (error) {
      console.log(error)
      // setLoginType(-1)
    }
  }

  useEffect(() => {
    checkUser()
  }, [])
  return (
    <View style={{
      backgroundColor: "#ffffff", height: height, width: width, alignItems: "center"
    }}>
      <Text style={{ color: "#000000", marginTop: 20, fontSize: 30, fontWeight: "bold" }}>Our Community</Text>
      <Text style={[style.blackText]}>Hello!</Text>
      <Text style={[style.blackText]}>Welcome to Our Community</Text>
      <Pressable onPress={() => navigate("SignUp")} style={{ marginTop: 30, elevation: 3, backgroundColor: "red", width: "60%", justifyContent: "center", alignItems: "center", height: 45, borderRadius: 5 }}>
        <Text style={[style.blackText]}>New User</Text>
      </Pressable>
      <Pressable onPress={() => navigate("SignIn")} style={{ marginTop: 30, elevation: 3, backgroundColor: "red", width: "60%", justifyContent: "center", alignItems: "center", height: 45, borderRadius: 5 }}>
        <Text style={[style.blackText]}>Already a community member</Text>
      </Pressable>
    </View>
  );
}
const style = StyleSheet.create({
  blackText: {
    color: "#000000"
  }
})

export default LoginScreen;