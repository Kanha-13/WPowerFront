import React from 'react';
import { View, Text } from "react-native";
import Slider from '../Screen2/Slider';

const Profile = ({ width }) => {
    return (
        <View style={{ height: "100%", width: width, backgroundColor: "red" }}><Text style={{ color: "white" }}>Profile</Text>
            <Slider />
        </View>
    );
}
export default Profile;