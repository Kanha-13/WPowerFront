import React, { useContext, useState } from "react";
import { Linking } from 'react-native'
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Dimensions } from "react-native";
import { generateSOS, iAMsafe } from "../../../socket_transport";
import { StateContext } from "../../../Utility/StateProvider";
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
const Home = () => {
  const Controller = useContext(StateContext);
  const { helpCalled, setHelpCalled, callSOS } = Controller
  const { height, width } = Dimensions.get('window');

  return (
    <View style={{
      top: height / 9.8,
    }}>
      <View style={{
        backgroundColor: "#C6CDCE",
        color: "white",
        paddingHorizontal: 30,
        width: width,
        borderRadius: 20,
        height: height / 1.3,
        zIndex: -1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <View style={{
          width: width, height: "40%", display: "flex",
          flexDirection: "row", justifyContent: "space-evenly",
          alignItems: "flex-end",
          zIndex: -1, padding: 6
        }}>
          <TouchableOpacity
            onPress={() => { RNImmediatePhoneCall.immediatePhoneCall('1091'); }}
            style={{ backgroundColor: "#fff", padding: 10, borderRadius: 10, alignItems: "flex-start", height: "60%", width: "45%" }}>
            <Image style={{ width: "60%", height: "70%" }} source={require('../../../assets/police.png')} ></Image>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => { RNImmediatePhoneCall.immediatePhoneCall('104'); }}
            style={{ backgroundColor: "#fff", padding: 10, borderRadius: 10, alignItems: "flex-end", height: "60%", width: "45%" }}>
            <Image style={{ width: "68%", height: "60%" }} source={require('../../../assets/ambulance.png')} ></Image>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: "50%",
            height: "28%",
            backgroundColor: helpCalled ? "green" : "red",
            borderColor: "#C6CDCE",
            borderWidth: 5,
            borderRadius: 100,
            justifyContent: "center",
            alignSelf: "center",
            position: "absolute"
          }}
          onPress={(e) => {
            if (helpCalled) {
              iAMsafe()
              setHelpCalled(false)
            } else {
              callSOS();
              setHelpCalled(true)
            }
          }}
        >
          <Text style={{
            fontSize: helpCalled ? 40 : 60,
            fontWeight: "bold",
            color: 'white',
            textAlign: "center",
            alignSelf: "center"

          }}>{helpCalled ? "I am safe Now" : "Help"}</Text>
        </TouchableOpacity>
        <View style={{
          width: width, height: "40%", display: "flex",
          flexDirection: "row", justifyContent: "space-evenly", alignItems: "flex-start",
          zIndex: -1, padding: 6
        }}>
          <TouchableOpacity
            // onPress={() => { RNImmediatePhoneCall.immediatePhoneCall('0123456789'); }}
            style={{ backgroundColor: "#fff", padding: 10, borderRadius: 10, justifyContent: "flex-end", alignItems: "flex-start", height: "60%", width: "45%" }}>
            <Image style={{ width: "70%", height: "80%" }} source={require('../../../assets/family.png')} ></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: "#fff", padding: 10, borderRadius: 10, justifyContent: "flex-end", alignItems: "flex-end", height: "60%", width: "45%" }}>
            <Image style={{ width: "65%", height: "70%" }} source={require('../../../assets/nearHelp.png')} ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Home;