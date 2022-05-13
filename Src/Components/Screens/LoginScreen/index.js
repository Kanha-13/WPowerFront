import React, { useEffect, useContext } from "react";
import { View, Text, Pressable, Dimensions, StyleSheet } from 'react-native'
import auth from '@react-native-firebase/auth'
import { StateContext } from '../../../Utils/StateProvider';

const LoginScreen = ({ navigate }) => {
  const { height, width } = Dimensions.get("screen")
  const State = useContext(StateContext);
  const { onVerify, onLogout } = State;

  const checkUser = () => {
    try {
      auth().onAuthStateChanged((user) => {
        if (user) {
          if (user.phoneNumber !== null) {
            console.log(user)
            onVerify();
          }
        }
        else {
          onLogout()
        }
      });
    } catch (error) {
      console.log(error)
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