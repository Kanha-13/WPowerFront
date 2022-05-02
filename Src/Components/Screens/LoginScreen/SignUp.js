import React, { useState } from 'react'
import { View, Pressable, Text } from 'react-native'
import GoogleSignUp from './GoogleSignUp'
import NativeSignUp from './NativeSignUp'

const SignUp = ({ onVerify }) => {
  const [confirm, setConfirm] = useState("")
  const [signUpVia, setSignUpVia] = useState(-1) //0 for google 1 for native
  const onBack = () => {
    setSignUpVia(-1)
  }
  return (
    <View style={{
      width: "100%", height: "100%", backgroundColor: "#ffffff", alignItems: "center"
    }}>
      {
        signUpVia === -1 ? <>
          <Text style={{ flex: 1, color: "#000000", marginTop: 60 }}>Sign Up</Text>
          <View style={{ height: "65%", width: "100%", alignItems: "center" }}>
            <Pressable
              onPress={() => setSignUpVia(0)}
              style={{
                alignItems: "center",
                justifyContent: "center", backgroundColor: "orange",
                width: "80%", height: 55, borderRadius: 5, marginVertical: 20
              }}>
              <Text style={{ fontWeight: "bold", color: "#ffffff", fontSize: 20 }}>Google Signup</Text>
            </Pressable>
            <Pressable
              onPress={() => setSignUpVia(1)}
              style={{
                alignItems: "center",
                justifyContent: "center", backgroundColor: "wheat",
                width: "80%", height: 55, borderRadius: 5, marginVertical: 20
              }}>
              <Text style={{ fontWeight: "bold", color: "#000000", fontSize: 20 }}>Other Method</Text>
            </Pressable>
          </View>
        </> :
          signUpVia === 0 ? <GoogleSignUp onBackPress={onBack} onVerify={onVerify} /> :
            signUpVia === 1 ? <NativeSignUp onBackPress={onBack} onVerify={onVerify} /> : <></>
      }
    </View>
  );
}
export default SignUp;