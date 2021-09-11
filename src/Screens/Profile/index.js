import React, { useEffect, useState, useRef } from "react"
import { View, SafeAreaView, StyleSheet, Text, Flex, TextInput } from "react-native";
import { Dimensions, PixelRatio } from 'react-native';
import InputField from "./Utility/inputFields";
const Profile = () => {
  const { height, width } = Dimensions.get('window');
  const [myDetails, setMyDetails] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
  })
  const { firstName, lastName, mobileNumber } = myDetails
  console.log(myDetails)
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
          }}>My Details</Text>
          <InputField title="First Name" name="firstName" setMyDetails={setMyDetails} myDetails={myDetails} />
          <InputField title="Last Name" name="lastName" setMyDetails={setMyDetails} myDetails={myDetails} />
          <InputField title="Mobile Number" name="mobileNumber" setMyDetails={setMyDetails} myDetails={myDetails} />
        </View>

      </View>
    </>
  );

}

export default Profile
