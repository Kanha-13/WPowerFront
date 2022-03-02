import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Image, BackHandler } from "react-native";
import { style } from "./style";
import { PATH } from "../../Utils/Constants/path";
import { HIDEFROM } from "../../Utils/Constants/hideBars";
let backStack = []
const BottomNavigation = (props) => {
    const [path, setPath] = useState(props.initialRoute)
    // const [backStack, setBackStack] = useState([])
    const navigate = (path) => {
        console.log(path)
        setPath(path)
    }
    const backAction = () => {
        if (path === PATH.HOME)
            BackHandler.exitApp()
        else if (path === PATH.EXPLORE || path === PATH.LIKES || path === PATH.MATCHES || path === PATH.SETTINGS) {
            navigate(PATH.HOME)
        } else {
            backStack.pop()
            navigate(backStack[backStack.length - 1])
        }
        return true;
    }

    useEffect(() => {
        if (path === PATH.EXPLORE || path === PATH.LIKES || path === PATH.MATCHES || path === PATH.SETTINGS) {
            backStack = [PATH.HOME, path]
        }
        else if (path !== PATH.HOME && path !== backStack[backStack.length - 1]) {
            backStack = [...backStack, path]
        }
        BackHandler.addEventListener("hardwareBackPress", backAction)
        return () =>
            BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, [path]);

    return (
        <View style={style.container} >
            {!HIDEFROM.includes(path) && <View style={{ zIndex: 1, height: "6.5%", width: "100%", backgroundColor: "#F5F5F5", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "#30475E", fontSize: 25, fontWeight: "600" }}>DM</Text>
            </View>}
            <View style={{ height: "87%", width: "100%" }}>
                {props.children.map(child => {
                    if (path === child.type.name) {
                        return React.cloneElement(child, {
                            path: path,
                            navigate: navigate,
                            key: child.type.name,
                            goBack: backAction
                        });
                    }
                })}
            </View>
            {!HIDEFROM.includes(path) &&
                <View style={{ height: "6.5%", width: "100%", backgroundColor: "#F5F5F5", flexDirection: "row", justifyContent: "space-evenly" }}>
                    <View style={{ borderRadius: 25, height: "100%", width: "20%", overflow: "hidden" }}>
                        <Pressable android_ripple={{ color: "#b6bbbe" }} onPress={() => {
                            console.log("pressed")
                            navigate(PATH.SCREEN1)
                        }} style={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "red" }}>
                            {/* <Image style={{ tintColor: path === PATH.HOME ? "#F05454" : "#30475E", height: "55%", width: "55%", resizeMode: "contain" }} source={HomeIcon} /> */}
                            <Text>Screen1</Text>
                        </Pressable>
                    </View>
                    <View style={{ borderRadius: 25, height: "100%", width: "20%", overflow: "hidden" }}>
                        <Pressable android_ripple={{ color: "#b6bbbe" }} onPress={() => {
                            console.log("pressed")
                            navigate(PATH.SCREEN2)
                        }} style={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "red" }}>
                            {/* <Image style={{ tintColor: path === PATH.EXPLORE ? "#F05454" : "#30475E", width: "45%", height: "45%", resizeMode: "contain" }} source={ExploreIcon} /> */}
                            <Text>Screen2</Text>
                        </Pressable>
                    </View>
                    <View style={{ borderRadius: 25, height: "100%", width: "20%", overflow: "hidden" }}>
                        <Pressable android_ripple={{ color: "#b6bbbe" }} onPress={() => {
                            console.log("pressed")
                            navigate(PATH.SCREEN3)
                        }} style={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "red" }}>
                            {/* <Image style={{ tintColor: path === PATH.LIKES ? "#F05454" : "#30475E", width: "45%", height: "45%", resizeMode: "contain" }} source={LikesIcon} /> */}
                            <Text>Screen3</Text>
                        </Pressable>
                    </View>
                </View>
            }
        </View>
    )
}
export default BottomNavigation;