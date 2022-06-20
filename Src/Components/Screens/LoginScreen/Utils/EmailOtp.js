import React, { useEffect, useState } from 'react'
import { View, Pressable, Text, TextInput,Alert } from 'react-native'
const EmailOpt = ({ onChange, onResend }) => {
  const [totalOtpSent, setToal] = useState(1);
  const [stopResend, setStopResend] = useState(false)
  const resendOtp = () => {
    console.log(totalOtpSent)
    setStopResend(true)
    resendTimer()
    setToal(prev => prev + 1);
    // onResend()
  }
  const resendTimer = () => {
    setTimeout(() => {
      console.log("trigger...")
      setStopResend(false)
    }, 30000)
  }
  useEffect(()=>{
    if(totalOtpSent>=3){
      setStopResend(true)
      Alert.alert("Otp services is limited, you have exhausted for the day.")
    }
  },[totalOtpSent])
  useEffect(() => {
    resendTimer()
    setStopResend(true)
  }, [])
  return (
    <View style={{
      paddingHorizontal: 20, paddingVertical: 30,
      width: "100%", justifyContent: "space-between",
      flex: 1
    }}>
      <View>
        <Text style={{ color: "#000000", marginTop: 20,marginLeft:10, fontSize: 22 }}>Email Opt</Text>
        <TextInput keyboardType='number-pad' autoFocus={true} focusable={true} onChangeText={(text) => onChange("emailOpt", text)} style={{ borderRadius: 5, borderWidth: 1, color: "#000000" }} placeholderTextColor="#000000" placeholder='Enter your Email Opt' />
        <Text style={{ color: "#000000", marginTop:30 }}>Didn't recieved otp?</Text>
        <Pressable disabled={stopResend}
          onPress={resendOtp}
          style={{
            marginTop: 20,
            backgroundColor: stopResend ? "#edc390" : "#e5a353",
            width: 90, height: 45,
            justifyContent: "center",
            alignItems: "center", borderRadius: 5
          }}>
          <Text style={{ color: "#ffffff", fontWeight: "bold" }}>Re-send</Text>
        </Pressable>
      </View>
    </View>
  );
}
export default EmailOpt;