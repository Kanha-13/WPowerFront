import React, { useEffect } from 'react';
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const Screen1 = () => {
    useEffect(() => {
        console.log("Screen 1 loaded")
    }, [])
    return (
        <View style={{ backgroundColor: "blue", height: "100%", zIndex: 100 }}>
            <Pressable onPress={() => console.log("presses")} style={{
                backgroundColor: "red", width: "50%",
                height: "20%", borderRadius: 50, alignItems: "center",
                justifyContent: "center"
            }}>
                <Text style={{ color: "white" }}>Press Me</Text>
            </Pressable>
            <TouchableOpacity onPress={() => console.log("presses")} style={{
                backgroundColor: "red", width: "50%",
                height: "20%", borderRadius: 50, alignItems: "center",
                justifyContent: "center"
            }}>
                <Text style={{ color: "white" }}>Press Me</Text></TouchableOpacity>
            <Text style={{ color: "white" }}>Screen1</Text>
        </View>
    );
}
export default Screen1;