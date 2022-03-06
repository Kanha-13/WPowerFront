import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet, Animated } from "react-native";
import { help } from '../../../Apis';

const Home = () => {
    const [ripple] = useState(new Animated.Value(0.9))
    const [ripple_color, setColor] = useState("#c8ebc8")
    const callHelp = async () => {
        setColor("pink")
        console.log(await help())
    }
    const rippleEffect = () => {
        Animated.sequence([
            Animated.timing(ripple, {
                toValue: 1.8,
                duration: 2000,
                useNativeDriver: true,
            }),
            Animated.timing(ripple, {
                toValue: 0.9,
                duration: 10,
                useNativeDriver: true,
            })

        ]).start()
    }
    useEffect(() => {
        const interval = setInterval(rippleEffect, 2100);
        return () => clearInterval(interval);
    }, [])
    return (
        <View style={[style.centerAlign, { height: "100%", backgroundColor: "#ffffff" }]}>
            <View style={[style.centerAlign, { height: "55%", width: "100%" }]}>
                <Animated.View style={{ transform: [{ scale: ripple }], backgroundColor: ripple_color, height: "60%", width: "60%", position: "absolute", borderRadius: 120 }}>

                </Animated.View>
                <Pressable android_ripple={{ color: "gray", foreground: true }} onPress={() => callHelp()}
                    style={[style.centerAlign, {
                        backgroundColor: 'red', width: "55%", overflow: "hidden",
                        borderRadius: 300, height: "55%", borderWidth: 10, borderColor: "grey"
                    }]}>
                    <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 56 }}>Help</Text>
                </Pressable>
            </View>
            <View style={{
                height: "45%", width: "100%", alignItems: "center", flexDirection: "row",
                justifyContent: "space-around", flexWrap: "wrap"
            }}>
                <Pressable android_ripple={{ color: "gray", foreground: true }} onPress={() => console.log("help")} style={[style.centerAlign, {
                    backgroundColor: 'purple', width: "45%",
                    height: "45%", margin: 10, borderRadius: 30, overflow: "hidden", borderWidth: 10, borderColor: "gray"
                }]}>
                    <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 45 }}>Family</Text>
                </Pressable>
                <Pressable android_ripple={{ color: "gray", foreground: true }} onPress={() => console.log("help")} style={[style.centerAlign, {
                    backgroundColor: 'purple', width: "45%",
                    height: "45%", margin: 10, borderRadius: 30, overflow: "hidden", borderWidth: 10, borderColor: "gray"
                }]}>
                    <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 45 }}>NearBy</Text>
                </Pressable>
                <Pressable android_ripple={{ color: "gray", foreground: true }} onPress={() => console.log("help")} style={[style.centerAlign, {
                    backgroundColor: 'purple', width: "45%",
                    height: "45%", margin: 10, borderRadius: 30, overflow: "hidden", borderWidth: 10, borderColor: "gray"
                }]}>
                    <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 45 }}>Ambulance</Text>
                </Pressable>
                <Pressable android_ripple={{ color: "gray", foreground: true }} onPress={() => console.log("help")} style={[style.centerAlign, {
                    backgroundColor: 'purple', width: "45%",
                    height: "45%", margin: 10, borderRadius: 30, overflow: "hidden", borderWidth: 10, borderColor: "gray"
                }]}>
                    <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 45 }}>Police</Text>
                </Pressable>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    centerAlign: {
        alignItems: "center",
        justifyContent: "center"
    }
})
export default Home;