import React, { useEffect, useState, useRef, useContext } from 'react';
import { View, Text, Pressable, Animated, Image, Dimensions, ScrollView } from "react-native";
import Button from './Buttons';
import { callAmbulance, callFamily, callNearBy, callPolice, reverseGeoCoding } from './api';
import marker from '../../../assets/img/marker.png'
import me from '../../../assets/img/me.jpeg'
import home from '../../../assets/img/home.jpg'
import police from '../../../assets/img/police.png'
import nearby from '../../../assets/img/marker.png'
import ambulance from '../../../assets/img/ambulance.png'
import { style } from './style';
import SituationCard from './SituationCard';
import { getCurrentLocation } from '../../../Utils/Location';
import auth from '@react-native-firebase/auth';
import { StateContext } from '../../../Utils/StateProvider';

const Home = ({ openDrawer, width, navigate }) => {
    const State = useContext(StateContext);
    const { establishConnection, mySocket } = State;
    const { height } = Dimensions.get("screen")
    const [ripple] = useState(new Animated.Value(0.9))
    const [ripple_color1, setColor1] = useState("#ebfaed")
    const [ripple_color2, setColor2] = useState("#d1f7d4")
    const [centerButtonText, setButtonText] = useState("Help")
    const [centerButtonColor, setCenterButtonColor] = useState("#f53736")
    const [helpCalled, setHelpCalled] = useState(0)
    const [borderWidth] = useState(new Animated.Value(1))
    const stopCalling = useRef(true)
    const [userData, setUserData] = useState({})
    const startAnimate = () => {
        Animated.timing(borderWidth, {
            toValue: 1.3,
            duration: 300,
            useNativeDriver: true,
        }).start()
    }
    const continuouslyCallForHelp = (address) => {
        stopCalling.current = false
        let interval = setInterval(async () => {
            if (stopCalling.current) {
                clearInterval(interval)
            } else {
                mySocket.emit("helpMe", { cords: await getCurrentLocation(), address: address, userData: userData })
            }
        }, 2000);
        return () => clearInterval(interval)
    }
    const stopCallForHelp = async () => {
        console.log("emmiting stop call")
        mySocket.emit("iAmSafe", { cords: await getCurrentLocation(), phoneNumber: userData.phoneNumber })
    }
    const callHelp = async () => {
        if (helpCalled) {
            //send message that I am safe now
            stopCalling.current = true
            stopCallForHelp();
            Animated.timing(borderWidth, { toValue: 1, duration: 100, useNativeDriver: true }).start()
            setHelpCalled(0)
            setCenterButtonColor("#f53736")
            setButtonText("Help")
            setColor1("#ebfaed")
            setColor2("#d1f7d4")
        } else {
            try {
                await reverseGeoCoding(await getCurrentLocation()).then((res) => {
                    continuouslyCallForHelp(res);
                })
            } catch (error) {
                alert("Not able to send your help request! Server is not rechable")
            }
            setHelpCalled(1)
            setCenterButtonColor("#36f576")
            setButtonText("I am safe")
            setTimeout(() => {
                setColor1("#faebee")
                setColor2("#f7d1d2")
            }, 2000);
            startAnimate()
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
    const getUserLocation = async () => {
        const cords = await getCurrentLocation();
        console.log(cords)
    }

    useEffect(() => {
        establishConnection()
        setUserData(auth().currentUser)
        getUserLocation()
    }, [])
    useEffect(() => {
        const interval = setInterval(rippleEffect, 2100);
        return () => clearInterval(interval);
    }, [])
    const [drawerState, setDrawerState] = useState(0)
    const pullDrawer = () => {
        openDrawer(!drawerState)
        setDrawerState(!drawerState)
    }
    return (
        <View style={{ height: "100%", width: width }}>
            <View style={{ flexDirection: "row", zIndex: 1, height: "6.5%", width: "100%", backgroundColor: "#F5F5F5", alignItems: "center", justifyContent: "center" }}>
                {/* <View style={{ flexDirection: "row", zIndex: 1, height: "6.5%", width: "100%", backgroundColor: "blue", alignItems: "center", justifyContent: "center" }}> */}
                <Pressable onPress={pullDrawer} style={{
                    paddingVertical: 10, justifyContent: "space-between",
                    zIndex: 1, height: 40, marginLeft: 10, left: 0, position: "absolute", width: 27
                }}>
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
                            <Text style={{ color: "#000000", fontWeight: "bold" }}>Hello Kanha!</Text>
                            <Pressable onPress={() => navigate("Profile")}>
                                <Text style={{ color: "#000000", color: "red" }}>Complete profile</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", width: "50%", }}>
                        <View style={{ width: "80%", alignItems: "flex-end" }}>
                            <Text style={{ color: "#000000" }}>Samta colony,Ra...</Text>
                            <Pressable onPress={() => navigate("Map")}>
                                <Text style={{ color: "#000000", color: "red" }}>See your location</Text>
                            </Pressable>
                        </View>
                        <Image source={marker} style={{ width: "20%", height: "60%", resizeMode: "contain" }} />
                    </View>
                </View>
                <View style={{ width: "100%", alignItems: "center", justifyContent: "center", marginTop: 50 }}>
                    {/* <View style={[style.centerAlign, { height: "55%", width: "100%" }]}> */}
                    <Animated.View style={{ zIndex: -1, transform: [{ scale: ripple }], backgroundColor: ripple_color1, height: height / 4.2, width: "50%", position: "absolute", borderRadius: 120 }}></Animated.View>
                    <Animated.View style={{ zIndex: -1, transform: [{ scale: ripple }], backgroundColor: ripple_color2, height: height / 5.3, width: "40%", position: "absolute", borderRadius: 120 }}></Animated.View>
                    <Animated.View style={{ elevation: 15, zIndex: -1, transform: [{ scale: borderWidth }], backgroundColor: "#b9becd", height: height / 4.3, width: "49%", position: "absolute", borderRadius: 300 }}></Animated.View>
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
                    width: "100%", alignItems: "center", flexDirection: "row", height: height * 0.30, marginTop: 50
                    , flexWrap: "wrap", paddingBottom: 0
                }}>
                    <Button img={police} title="Police" onClick={callPolice} />
                    <Button img={nearby} title="Near By" onClick={callNearBy} />
                    <Button img={home} title="Family" onClick={callFamily} />
                    <Button img={ambulance} title="Ambulance" onClick={callAmbulance} />
                </View>
                <Text style={{ color: "#000000", textAlign: "center", fontSize: 22, fontWeight: "bold" }}>Not sure what to do?</Text>
                <Text style={{ color: "#000000", textAlign: "center", fontSize: 18 }}>Click the below card that suits your situation</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                    style={{ flexGrow: 1 }} contentContainerStyle={{
                        justifyContent: "flex-start", flexGrow: 1
                    }}>
                    <SituationCard title="I had an accident" />
                    <SituationCard title="I had an injury" />
                    <SituationCard title="I require bloods" />
                </ScrollView>
            </View>

        </View>
    );
}


export default Home;