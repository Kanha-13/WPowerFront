import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Dimensions } from "react-native";
import { generateSOS, iAMsafe } from "../../../socket_transport";
import { StateContext } from "../../../Utility/StateProvider";
const Home = () => {
  const Controller = useContext(StateContext);
  const { helpCalled, setHelpCalled, callSOS } = Controller
  const { height, width } = Dimensions.get('window');

  return (
    <View style={{
      paddingTop: 90,
    }}>
      <View style={{
        backgroundColor: "#C6CDCE", color: "white", padding: 30, width: "100%", borderRadius: 20, height: "90%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"
      }}>
        <View style={{ width: width, display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity style={{ backgroundColor: "#fff", borderRadius: 10, alignItems: "center", top: 75, height: 150, width: 180 }}>
            <Image style={{ top: 10, right: 20, width: 100, height: 100 }} source={require('../../../assets/police.png')} ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: "#fff", borderRadius: 10, top: 75, height: 150, width: 180 }}>
            <Image style={{ left: 50, top: 10, width: 115, height: 90 }} source={require('../../../assets/ambulance.png')} ></Image>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: "50%",
            height: 185,
            backgroundColor: helpCalled ? "green" : "red",
            borderColor: "#C6CDCE",
            // borderColor: "#fff",
            borderWidth: 5,
            borderRadius: 130,
            justifyContent: "center",
            alignSelf: "center"
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
        <View style={{ width: width, display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>

          <TouchableOpacity style={{ backgroundColor: "#fff", borderRadius: 10, alignItems: "center", bottom: 90, zIndex: -1, height: 150, width: 180 }}>
            <Image style={{ top: 30, width: 120, right: 10, height: 100 }} source={require('../../../assets/family.png')} ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: "white", borderRadius: 10, bottom: 90, zIndex: -1, height: 150, width: 180 }}>
            <Image style={{ top: 30, left: 50, width: 100, height: 100 }} source={require('../../../assets/nearHelp.png')} ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Home;