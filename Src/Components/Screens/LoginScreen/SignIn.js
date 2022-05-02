import React, { useState } from 'react'
import { View, Pressable, Text, TextInput } from 'react-native'
import { getOtp, verifyOtp } from './SessionManager'
const SignIn = ({ onVerify, navigate }) => {
  const [mobileNumber, setMobileNumber] = useState("")
  const [otp, setOtp] = useState("")
  const [confirm, setConfirm] = useState(null)

  const requestOtp = async () => {
    const confirmCode = await getOtp(mobileNumber)
    setConfirm(confirmCode)
  }
  const checkOtp = async () => {
    const response = await verifyOtp(confirm, otp)
    if (response)
      onVerify()
  }

  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "#ffffff" }}>
      <Text style={{ color: "#000000", marginTop: 60, fontSize: 20 }} >Phone Number</Text>
      <TextInput onChangeText={(text) => setMobileNumber(text)} style={{ borderWidth: 2, color: "#000000" }} placeholderTextColor="#000000" placeholder="Enter mobile number" />
      <Pressable style={{ backgroundColor: "pink", margin: 10, height: 40 }}
        android_ripple={{ color: "gray" }} onPress={requestOtp}>
        <Text style={{ color: "#000000" }}>Submit Number</Text>
      </Pressable>
      <TextInput onChangeText={(text) => setOtp(text)} style={{ borderWidth: 2, color: "#000000" }} placeholderTextColor="#000000" placeholder="Enter otp" />
      <Pressable style={{ backgroundColor: "pink", margin: 10, height: 40 }}
        android_ripple={{ color: "gray" }} onPress={checkOtp}>
        <Text style={{ color: "#000000" }}>Submit Otp</Text>
      </Pressable>
    </View>
  );
}
export default SignIn;