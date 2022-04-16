import React from 'react';
import { View, Text } from "react-native";

const Profile = ({ width }) => {
    return (
        <View style={{ height: "100%", width: width, backgroundColor: "red" }}><Text style={{ color: "white" }}>Profile</Text></View>
    );
}
export default Profile;