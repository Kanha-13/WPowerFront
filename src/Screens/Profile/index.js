import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import InputField from "../../../Utility/inputFields";
import AsyncStorage from '@react-native-async-storage/async-storage';
import save from '../../../assets/save.png'
import edit from '../../../assets/edit.png'
const Profile = () => {
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
        padding: 20,
        width: "100%",
        borderRadius: 20,
        alignSelf: "center",
        height: "90%",
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
        <ScrollView
          style={{ marginBottom: 40 }}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <InputField editMode={editMode} title="First Name" name="firstName" setMyDetails={setMyDetails} myDetails={myDetails} />
            <InputField editMode={editMode} title="Last Name" name="lastName" setMyDetails={setMyDetails} myDetails={myDetails} />
            <InputField editMode={editMode} title="Mobile Number" name="mobileNumber" setMyDetails={setMyDetails} myDetails={myDetails} />
            <InputField editMode={editMode} title="Email Address" name="emailAddress" setMyDetails={setMyDetails} myDetails={myDetails} />
          </View>
        </ScrollView>
      </View>
    </View >
  );

}
export default Profile
