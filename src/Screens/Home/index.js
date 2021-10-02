import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { generateSOS, iAMsafe } from "../../../socket_transport";
import { StateContext } from "../../../Utility/StateProvider";
const Home = ({ socket }) => {
  const HelpBtn = useContext(StateContext);
  const { helpCalled, setHelpCalled } = HelpBtn
  const { height, width } = Dimensions.get('window');
  const callSOS = async () => {
    await generateSOS(socket)
  }

  return (
    <View style={{
      paddingTop: 90,
    }}>
      <View style={{
        backgroundColor: "#C6CDCE",
        color: "white",
        padding: 30,
        width: "100%",
        borderRadius: 20,
        height: "90%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
      >
        <View style={{ width: width, display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>

          <TouchableOpacity style={{ backgroundColor: "pink", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: "bold",
                paddingLeft: 15,
                color: 'white',
                textAlign: "center",
                alignSelf: "center"
              }}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: "pink" }}>
            <Text style={{
              fontSize: 40,
              fontWeight: "bold",
              paddingLeft: 15,
              color: 'white',
              textAlign: "center",
              alignSelf: "center"

            }}>Help</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: "50%",
            height: 185,
            backgroundColor: helpCalled ? "green" : "red",
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
        <TouchableOpacity style={{ backgroundColor: "pink" }}>
          <Text style={{
            fontSize: 60,
            fontWeight: "bold",
            paddingLeft: 15,
            color: 'white',
            textAlign: "center",
            alignSelf: "center"

          }}>Help</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;