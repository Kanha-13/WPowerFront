import React, { useEffect, useContext } from "react";
import { View, Text, Pressable, Dimensions, StyleSheet, Image } from 'react-native'
import auth from '@react-native-firebase/auth'
import { StateContext } from '../../../Utils/StateProvider';
import community from '../../../assets/img/community.jpg'
const LoginScreen = ({ navigate }) => {
  const { height, width } = Dimensions.get("window")
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
      backgroundColor: "#ffffff", height: height, width: width, alignItems: "center", justifyContent: "space-between"
    }}>
      <View >
        <Text style={{ color: "#000000", marginVertical: 30, fontSize: 30, fontWeight: "bold", fontFamily: "Nunito-Bold" }}>Our Community</Text>
        {/* <Text style={[style.blackText]}>Welcome to Our Community</Text> */}
      </View>
      <Image style={{ width: "100%", height: 430, resizeMode: "contain" }} source={community} />
      <View style={{ width: "100%", justifyContent: "center", alignItems: "center", paddingBottom: 30 }}>
        <Pressable onPress={() => navigate("SignUp")} style={{ elevation: 3, backgroundColor: "#76398E", width: "60%", justifyContent: "center", alignItems: "center", height: 55, borderRadius: 5 }}>
          <Text style={[style.whiteText, style.mediumText]}>New User</Text>
        </Pressable>
        <Pressable onPress={() => navigate("SignIn")} style={{ marginTop: 10, elevation: 3, backgroundColor: "#19ACC1", width: "60%", justifyContent: "center", alignItems: "center", height: 55, borderRadius: 5 }}>
          <Text style={[style.whiteText, style.mediumText]}>Already a community member</Text>
        </Pressable>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  smallText: {

  },
  mediumText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  largeText: {

  },
  blackText: {
    color: "#000000",
  },
  whiteText: {
    color: "#ffffff",
    fontFamily: "Nunito-Bold"
  }
})

export default LoginScreen;