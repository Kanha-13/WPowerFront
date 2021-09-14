import React, { useEffect, useState, useRef } from "react"
import { Link } from "react-router-native";
import { Text, TouchableOpacity, View } from 'react-native'
import AccountNavigation from "../../../Utility/AccountNavigation";
const MyAccount = ({ currentTab, setCurrentTab }) => {
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
        <View style={{
          backgroundColor: "white",
          paddingTop: 20,
          width: "100%",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          alignSelf: "center"
        }}
        >
          <Text>Account Details</Text>
          {AccountNavigation(setCurrentTab, 'Profile', "Edit Profile")}
          {AccountNavigation(setCurrentTab, 'MyGuardian', "My Gurdians")}
          {AccountNavigation(setCurrentTab, 'SecreatPin', "Change Secreat Pin")}
        </View>
        <View style={{
          backgroundColor: "white",
          paddingTop: 20,
          width: "100%",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          alignSelf: "center"
        }}
        >
          <Text>Account Management</Text>
          {AccountNavigation(setCurrentTab, 'DeleteAccount', "Delete Account")}
          {AccountNavigation(setCurrentTab, 'SendFeedBack', "Send Feedback")}
        </View>
      </View>
    </View>
  );
}
export default MyAccount;