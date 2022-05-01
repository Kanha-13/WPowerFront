import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Dimensions, TextInput } from 'react-native'
import auth from '@react-native-firebase/auth'
const LoginScreen = ({ onVerify, onLogout }) => {
  const [mobileNumber, setMobileNumber] = useState("")
  const { height, width } = Dimensions.get("screen")
  const [confirm, setConfirm] = useState("")
  const [otp, setOtp] = useState("")
  const getOtp = async () => {
    try {
      const confirmCode = await auth().signInWithPhoneNumber(`+91${mobileNumber}`)
      setConfirm(confirmCode)
      console.log(confirmCode)
    } catch (error) {
      console.log(error)
    }
  }
  const verifyOtp = async () => {
    try {
      const response = await confirm.confirm(otp)
      onVerify()
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
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
      backgroundColor: "#ffffff", height: height, width: width, alignItems: "center", justifyContent: "center"
    }}>
      <Text style={{ color: "#000000" }} >Phone Number</Text>
      <TextInput onChangeText={(text) => setMobileNumber(text)} style={{ borderWidth: 2, color: "#000000" }} placeholderTextColor="#000000" placeholder="Enter mobile number" />
      <Pressable style={{ backgroundColor: "pink", margin: 10, height: 40 }} android_ripple={{ color: "gray" }} onPress={getOtp}><Text style={{ color: "#000000" }}>Submit Number</Text></Pressable>
      <TextInput onChangeText={(text) => setOtp(text)} style={{ borderWidth: 2, color: "#000000" }} placeholderTextColor="#000000" placeholder="Enter otp" />
      <Pressable style={{ backgroundColor: "pink", margin: 10, height: 40 }} android_ripple={{ color: "gray" }} onPress={verifyOtp}><Text style={{ color: "#000000" }}>Submit Otp</Text></Pressable>
    </View>
  );
}
export default LoginScreen;