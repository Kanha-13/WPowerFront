import React, { useEffect, useState, useRef } from "react"
import { View, SafeAreaView, StyleSheet, Text, Flex, TextInput, TouchableOpacity, Image, Keyboard } from "react-native";
import { Dimensions, PixelRatio } from 'react-native';
import InputField from "../../../Utility/inputFields";
import AsyncStorage from '@react-native-async-storage/async-storage';
import save from '../../../assets/save.png'
import cancle from '../../../assets/cancle.png'
import edit from '../../../assets/edit.png'
const Profile = () => {
  const { height, width } = Dimensions.get('window');
  const [myDetails, setMyDetails] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    emailAddress: "",
  })
  const [editMode, setEditMode] = useState(false)
  useEffect(async () => {
    setMyDetails({ ...myDetails, mobileNumber: await AsyncStorage.getItem('mobileNumber') })
  }, [])
  return (

    <View style={{
      paddingTop: 90,
    }}>
      <View style={{
        backgroundColor: "white",
        padding: 10,
        width: "100%",
        borderRadius: 20,
        alignSelf: "center",
        height: "97%",
      }}
      >
        <Text style={{
          fontSize: 20,
          alignSelf: "center",
        }}>My Details</Text>

        <TouchableOpacity
          onPress={() => {
            if (editMode) {
              console.log("save pressed")
              console.log(myDetails)
            }
            setEditMode(!editMode)
          }}
          style={{
            alignSelf: "flex-end",
            // backgroundColor: "#A7BBC7",
            borderRadius: 10,
            width: 50,
            height: 45,
          }}>
          <Image
            source={editMode ? save : edit}
            style={{
              alignSelf: "center",
            }}
          ></Image>
        </TouchableOpacity>

        <InputField editMode={editMode} title="First Name" name="firstName" setMyDetails={setMyDetails} myDetails={myDetails} />
        <InputField editMode={editMode} title="Last Name" name="lastName" setMyDetails={setMyDetails} myDetails={myDetails} />
        <InputField editMode={editMode} title="Mobile Number" name="mobileNumber" setMyDetails={setMyDetails} myDetails={myDetails} />
        <InputField editMode={editMode} title="Email Address" name="emailAddress" setMyDetails={setMyDetails} myDetails={myDetails} />
        {/* <View
          style={{
            display: editMode ? "flex" : "none",
            marginTop: 20,
            padding: 10,
            justifyContent: "space-around",
            flexDirection: "row",
            width: "100%",
            borderRadius: 20,
            alignSelf: "center",
          }}
        >
          <TouchableOpacity style={{
            backgroundColor: "#A7BBC7",
            borderRadius: 10,
            width: 90,
            height: 50,
          }}>
            <Image
              source={save}
              style={{
                alignSelf: "center",
                transform: [
                  {
                    rotate: "15deg"
                  }
                ]
              }}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={{
            backgroundColor: "gray",
            borderRadius: 10,
            paddingTop: 5,
            width: 90,
            height: 50,
          }}>
            <Image
              source={cancle}
              style={{
                tintColor: "#000000",
                height: 40,
                width: 40,
                alignSelf: "center",
              }}
            ></Image>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );

}

export default Profile
