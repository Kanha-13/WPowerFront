import React from "react"
import { Text, View } from 'react-native'
import AccountNavigation from "../../../Utility/AccountNavigation";
import { style } from "./style";
const MyAccount = ({ setCurrentTab }) => {
  return (
    <View style={style.containerWrapper}>
      <View style={style.container}>
        <Text>Account Details</Text>
        {AccountNavigation(setCurrentTab, 'Profile', "Edit Profile")}
        {AccountNavigation(setCurrentTab, 'MyGuardian', "My Gurdians")}
        {AccountNavigation(setCurrentTab, 'SecreatPin', "Change Secreat Pin")}
        <Text>Account Management</Text>
        {AccountNavigation(setCurrentTab, 'DeleteAccount', "Delete Account")}
        {AccountNavigation(setCurrentTab, 'SendFeedBack', "Send Feedback")}
      </View>
    </View>
  );
}
export default MyAccount;