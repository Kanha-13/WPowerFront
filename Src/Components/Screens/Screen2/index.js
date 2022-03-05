import React, { useEffect } from 'react';
import { View, Text } from "react-native";

const Map = () => {
    useEffect(() => {
        console.log("screen loaded")
    }, [])
    return (
        <View><Text style={{ color: "white" }}>Map</Text></View>
    );
}
export default Map;