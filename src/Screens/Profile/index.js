import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import InputField from "../../../Utility/inputFields";
import AsyncStorage from '@react-native-async-storage/async-storage';
import save from '../../../assets/save.png'
import edit from '../../../assets/edit.png'
import { Link } from "react-router-native";
const Profile = () => {
  const [myDetails, setMyDetails] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    emailAddress: "",
  })
  const [editMode, setEditMode] = useState(false)
  const getDetails = async () => {
    setMyDetails({ ...myDetails, mobileNumber: await AsyncStorage.getItem('mobileNumber') })
  }
  useEffect(() => {
    getDetails()
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
        <TouchableOpacity>
          <Link to="/MyAccount" underlayColor="none" >
            <Image style={{ width: 35, height: 25 }} source={require('../../../assets/backArrow.png')}></Image>
          </Link>
        </TouchableOpacity>
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
            <InputField editMode={editMode} title="Name" name="name" setMyDetails={setMyDetails} myDetails={myDetails} />
            <InputField editMode={editMode} title="Mobile Number" name="mobileNumber" setMyDetails={setMyDetails} myDetails={myDetails} />
            <InputField editMode={editMode} title="Email Address" name="emailAddress" setMyDetails={setMyDetails} myDetails={myDetails} />
          </View>
        </ScrollView>
      </View>
    </View >
  );

}
export default Profile
