import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, Animated, Image, Dimensions } from "react-native";
import { help } from '../../../Apis';
import Button from './Buttons';
import { callAmbulance, callFamily, callNearBy, callPolice } from './api';
import marker from '../../../assets/img/marker.png'
import me from '../../../assets/img/me.jpeg'
import { style } from './style';
const Home = ({ openDrawer, width }) => {
    const { height, width: windowWidth } = Dimensions.get("screen")
    const [ripple] = useState(new Animated.Value(0.9))
    const [ripple_color1, setColor1] = useState("#faebee")
    const [ripple_color2, setColor2] = useState("#f7d1d2")
    const [centerButtonText, setButtonText] = useState("Help")
    const [centerButtonColor, setCenterButtonColor] = useState("#f53736")
    const [helpCalled, setHelpCalled] = useState(0)
    const [borderWidth] = useState(new Animated.Value(1))

    const startAnimate = () => {
        Animated.timing(borderWidth, {
            toValue: 1.3,
            duration: 300,
            useNativeDriver: true,
        }).start()
    }
    const callHelp = async () => {
        if (helpCalled) {
            //send message that I am safe now
            Animated.timing(borderWidth, { toValue: 1, duration: 100, useNativeDriver: true }).start()
            setHelpCalled(0)
            setCenterButtonColor("#f53736")
            setColor1("#faebee")
            setButtonText("Help")
            setColor2("#f7d1d2")
        } else {
            setHelpCalled(1)
            setTimeout(() => {
                setColor1("#ebfaed")
                setColor2("#d1f7d4")
                setCenterButtonColor("#36f576")
                setButtonText("I am safe")
            }, 2000);
            startAnimate()
            // console.log(await help())
        }
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
    const [drawerState, setDrawerState] = useState(0)
    const pullDrawer = () => {
        openDrawer(!drawerState)
        setDrawerState(!drawerState)
    }
    console.log("hell")
    return (
        <View style={{ height: "100%", width: width }}>
            <View style={{ flexDirection: "row", zIndex: 1, height: "6.5%", width: "100%", backgroundColor: "#F5F5F5", alignItems: "center", justifyContent: "center" }}>
                {/* <View style={{ flexDirection: "row", zIndex: 1, height: "6.5%", width: "100%", backgroundColor: "blue", alignItems: "center", justifyContent: "center" }}> */}
                <Pressable onPress={pullDrawer} style={{ paddingVertical: 10, justifyContent: "space-between", zIndex: 1, height: 40, marginLeft: 10, left: 0, position: "absolute", width: 30 }}>
                    <View style={{ borderRadius: 5, width: "100%", borderColor: "#000000", borderTopWidth: 4 }}></View>
                    <View style={{ borderRadius: 5, width: "100%", borderColor: "#000000", borderTopWidth: 4 }}></View>
                    <View style={{ borderRadius: 5, width: "100%", borderColor: "#000000", borderTopWidth: 4 }}></View>
                </Pressable>
                <Text style={{ alignSelf: "center", width: "100%", textAlign: "center", color: "#30475E", fontSize: 25, fontWeight: "600" }}>Comminity</Text>
            </View>
            <View style={{ justifyContent: "space-between", height: "93.5%", backgroundColor: "#ffffff", alignItems: "center" }}>
                <View style={{ flexDirection: "row", marginTop: 10, paddingHorizontal: 10 }}>
                    <View style={{ flexDirection: "row", width: "50%" }}>
                        <Image source={me} style={{ borderRadius: 30, width: "25%", height: "100%", resizeMode: "contain" }} />
                        <View style={{ width: "75%" }}>
                            <Text style={{ color: "#000000" }}>Hello Kanha!</Text>
                            <Text style={{ color: "#000000", color: "red" }}>Complete profile</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", width: "50%", }}>
                        <View style={{ width: "80%", alignItems: "flex-end" }}>
                            <Text style={{ color: "#000000" }}></Text>
                            <Text style={{ color: "#000000", color: "red" }}>See your location</Text>
                        </View>
                        <Image source={marker} style={{ width: "20%", height: "60%", resizeMode: "contain" }} />
                    </View>
                </View>
                <View style={{ width: "100%", alignItems: "center", justifyContent: "center" }}>
                    {/* <View style={[style.centerAlign, { height: "55%", width: "100%" }]}> */}
                    <Animated.View style={{ transform: [{ scale: ripple }], backgroundColor: ripple_color1, height: height / 4.2, width: "50%", position: "absolute", borderRadius: 120 }}></Animated.View>
                    <Animated.View style={{ transform: [{ scale: ripple }], backgroundColor: ripple_color2, height: height / 5.3, width: "40%", position: "absolute", borderRadius: 120 }}></Animated.View>
                    <Animated.View style={{ transform: [{ scale: borderWidth }], backgroundColor: "#b9becd", height: height / 4.3, width: "49%", position: "absolute", borderRadius: 300 }}></Animated.View>
                    < Pressable android_ripple={{ color: "gray", foreground: true, borderless: true }} onPress={() => callHelp()}
                        style={[style.centerAlign, {
                            backgroundColor: centerButtonColor, width: "45%", overflow: "hidden",
                            borderRadius: 300, height: height * 0.21, elevation: 15, shadowColor: "black",
                            shadowOpacity: 1, shadowOffset: { height: "160px", width: "160px" }, paddingHorizontal: 10
                        }]}>
                        <Text style={{ color: "#ffffff", fontWeight: "bold", fontSize: 56, textAlign: "center" }}>{centerButtonText}</Text>
                    </Pressable>
                </View>
                <View style={{
                    width: "100%", alignItems: "center", flexDirection: "row",
                    justifyContent: "space-around", flexWrap: "wrap"
                }}>
                    <Button title="Family" onClick={callFamily} />
                    <Button title="Near By" onClick={callNearBy} />
                    <Button title="Ambulance" onClick={callAmbulance} />
                    <Button title="Police" onClick={callPolice} />
                </View>
            </View>

        </View>
    );
}


export default Home;