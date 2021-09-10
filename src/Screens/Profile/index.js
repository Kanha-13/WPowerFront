import React, { useEffect, useState, useRef } from "react"
import { View, SafeAreaView, StyleSheet, Text, Flex, TextInput } from "react-native";
import { Dimensions, PixelRatio } from 'react-native';
const Profile = () => {
  const { height, width } = Dimensions.get('window');
  const [myDetails, setMyDetails] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
  })
  return (
    <>
      <View style={{
        // ...StyleSheet.absoluteFillObject,
        backgroundColor: "gray",
        top: -50,
        zIndex: -1000,
        paddingTop: 90,
        width: width,
        height: height + 30,
      }}>
        <View style={{
          backgroundColor: "white",
          padding: 10,
          width: "98.5%",
          borderRadius: 5,
          alignSelf: "center"
        }}
        >

          <Text style={{
            fontSize: 20,
            alignSelf: "center",

            // color: "white"
          }}>My Details</Text>
          <View style={{
            backgroundColor: "#CECECB",
            width: "95%",
            alignSelf: "center",
            padding: 20,
            borderRadius: 10,


          }}>
            <Text>First Name</Text>
            <TextInput style={{
              color: "black",
              borderBottomWidth: 0.5,
            }} />
          </View>
        </View>

      </View>
    </>
  );

}

export default Profile
