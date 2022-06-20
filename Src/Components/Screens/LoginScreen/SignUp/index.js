import React, { useState, useContext } from 'react'
import { View, Pressable, Text } from 'react-native'
import GoogleSignUp from './GoogleSignUp'
import NativeSignUp from './NativeSignUp'
import { StateContext } from '../../../../Utils/StateProvider'
const SignUp = ({ navigate }) => {
  const State = useContext(StateContext);
  const { onVerify } = State;
  const [signUpVia, setSignUpVia] = useState(-1) //0 for google 1 for native
  const onBack = () => {
    setSignUpVia(-1)
  }
  const sendToSignIn=()=>{
    alert("User already exist sending to signin menu")
    navigate("SignIn")
  }
  return (
    <View style={{
      width: "100%", height: "100%", backgroundColor: "#ffffff", alignItems: "center"
    }}>
      {
        signUpVia === -1 ? <>
          <Pressable onPress={() => navigate("LoginScreen")} style={{ alignSelf: "flex-start", margin: 20 }}>
            <Text style={{ color: "#000000", fontSize: 26 }}>&lt;</Text>
          </Pressable>
          <Text style={{ flex: 1, color: "#000000", marginTop: 60, fontSize: 30, fontWeight: "bold" }}>Sign Up</Text>
          <View style={{ height: "65%", width: "100%", alignItems: "center" }}>
            <Text style={{fontSize:18,color:"#000000"}}>Create a free account by</Text>
            <Pressable
              onPress={() => setSignUpVia(0)}
              style={{
                alignItems: "center",
                justifyContent: "center", backgroundColor: "orange",
                width: "80%", height: 55, borderRadius: 5, marginVertical: 20
              }}>
              <Text style={{ fontWeight: "bold", color: "#ffffff", fontSize: 20 }}>Google Signup</Text>
            </Pressable>
            <Text style={{fontSize:20,color:"#000000"}}>or</Text>
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
            signUpVia === 1 ? <NativeSignUp onBackPress={onBack} onVerify={onVerify} alreadyExist={sendToSignIn} /> : <></>
      }
    </View>
  );
}
export default SignUp;