import React, { useState, useEffect, useRef } from "react";
import { View, Text, Pressable, Image, BackHandler, Dimensions, FlatList, PanResponder, Animated } from "react-native";
import { style } from "./style";
import { PATH } from "../../Utils/Constants/path";
import { HIDEFROM } from "../../Utils/Constants/hideBars";
import Drawer from "../Drawer";
let backStack = []
const SwipeTabs = (props) => {
    const [path, setPath] = useState(props.initialRoute)
    const { height, width } = Dimensions.get("window")
    const flatListRef = useRef()
    const currentIndex = useRef(0);
    const navigate = (path) => {
        setPath(path)
        switch (path) {
            case 'Map':
                changeScreen(1);
                break;
            case 'Profile':
                changeScreen(2);
                break;
            default:
                changeScreen(0);
                break;
        }
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



    const panResponder = React.useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onStartShouldSetPanResponderCapture: () => false,
            onPanResponderTerminationRequest: () => true,
            onMoveShouldSetPanResponder: (_, gestureState) => {
                const { dx, dy } = gestureState
                return (dx > 2 || dx < -2 || dy > 2 || dy < -2)
            },
            onMoveShouldSetPanResponderCapture: (_, gestureState) => {
                const { dx, dy } = gestureState
                return (dx > 2 || dx < -2 || dy > 2 || dy < -2)
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (currentIndex.current !== 1) {

                    if (gestureState.dx > 55) {
                        if (currentIndex.current === 0) {
                            flatListRef.current.scrollToIndex({ viewPosition: 0.5, index: 0 })
                        } else {
                            flatListRef.current.scrollToIndex({ viewPosition: 0.5, index: currentIndex.current - 1 })
                            currentIndex.current = currentIndex.current - 1;
                        }
                    } else if (gestureState.dx < -55) {
                        if (currentIndex.current === 2) {
                            flatListRef.current.scrollToIndex({ viewPosition: 0.5, index: 2 })
                        } else {
                            flatListRef.current.scrollToIndex({ viewPosition: 0.5, index: currentIndex.current + 1 })
                            currentIndex.current = currentIndex.current + 1;
                        }
                    }
                    changePath();//for changing tabs active color
                }
            }
        })
    ).current;
    const changePath = () => {
        if (currentIndex.current === 0) {
            setPath(PATH.SCREEN1)
        } else if (currentIndex.current === 1) {
            setPath(PATH.SCREEN2)
        } else {
            setPath(PATH.SCREEN3)
        }
    }
    const changeScreen = (index) => {
        flatListRef.current.scrollToIndex({ viewPosition: 0.5, index: index })
        currentIndex.current = index;

    }
    const renderScreen = ({ index }) => {
        return React.cloneElement(props.children[index], {
            path: path,
            navigate: navigate,
            width: width,
            openDrawer: openDrawer,
            key: props.children[index].type.name,
            goBack: backAction
        });
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
    const [translatey] = useState(new Animated.Value(0))
    const [translatex] = useState(new Animated.Value(0))
    const openDrawer = (action) => {
        if (action)
            Animated.parallel([
                Animated.timing(translatey, {
                    toValue: 50,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(translatex, {
                    toValue: width / 1.6,
                    duration: 300,
                    useNativeDriver: true,
                })

            ]).start()
        else
            Animated.parallel([
                Animated.timing(translatey, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(translatex, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                })

            ]).start()
    }
    return (
        <>
            <Drawer navigate={navigate} closeDrawer={openDrawer} />
            <Animated.View style={[style.container, { transform: [{ translateX: translatex }, { translateY: translatey }], overflow: "hidden" }]} >
                <View style={{ height: "93.5%", width: width, paddingHorizontal: "5%", alignItems: "center" }}>
                    <FlatList
                        ref={flatListRef}
                        // {...panResponder.panHandlers}
                        horizontal
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        style={{ height: "100%", width: "300%" }}
                        contentContainerStyle={{ height: "100%", paddingHorizontal: "31.5%" }}
                        scrollEnabled={false}
                        data={props.children}
                        renderItem={renderScreen}
                        keyExtractor={tut => tut.type.name}
                    />
                </View>
                {!HIDEFROM.includes(path) &&
                    <View style={{ height: "6.5%", width: "100%", backgroundColor: "#F5F5F5", flexDirection: "row", justifyContent: "space-evenly" }}>
                        <View style={{ height: "100%", width: "33%", overflow: "hidden" }}>
                            <Pressable android_ripple={{ color: "#b6bbbe", foreground: true, radius: 43 }} onPress={() => {
                                navigate(PATH.SCREEN1)
                            }} style={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: path === PATH.SCREEN1 ? "red" : "#000000" }} >{PATH.SCREEN1}</Text>
                            </Pressable>
                        </View>
                        <View style={{ height: "100%", width: "33%", overflow: "hidden" }}>
                            <Pressable android_ripple={{ color: "#b6bbbe", foreground: true, radius: 43 }} onPress={() => {
                                navigate(PATH.SCREEN2)
                            }} style={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: path === PATH.SCREEN2 ? "red" : "#000000" }} >{PATH.SCREEN2}</Text>
                            </Pressable>
                        </View>
                        <View style={{ height: "100%", width: "33%", overflow: "hidden" }}>
                            <Pressable android_ripple={{ color: "#b6bbbe", foreground: true, radius: 43 }} onPress={() => {
                                navigate(PATH.SCREEN3)
                            }} style={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: path === PATH.SCREEN3 ? "red" : "#000000" }} >{PATH.SCREEN3}</Text>
                            </Pressable>
                        </View>
                    </View>
                }
            </Animated.View>
        </>
    )
}
export default SwipeTabs;