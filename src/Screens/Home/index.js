import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const Home = () => {
  const { height, width } = Dimensions.get('window');
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
            <Text style={{
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
            backgroundColor: "red",
            borderRadius: 130,
            justifyContent: "center",
            alignSelf: "center"
          }}
          onPress={() => {
            console.log("touched")
            // CallHelp(myCords);
          }}
        >
          <Text style={{
            fontSize: 60,
            fontWeight: "bold",
            paddingLeft: 15,
            color: 'white',
            textAlign: "center",
            alignSelf: "center"

          }}>Help</Text>
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