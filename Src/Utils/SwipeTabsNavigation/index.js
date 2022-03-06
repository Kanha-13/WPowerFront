import React, { useState, useEffect, useRef } from "react";
import { View, Text, Pressable, Image, BackHandler, Dimensions, FlatList, PanResponder } from "react-native";
import { style } from "./style";
import { PATH } from "../../Utils/Constants/path";
import { HIDEFROM } from "../../Utils/Constants/hideBars";
let backStack = []
const SwipeTabs = (props) => {
    const [path, setPath] = useState(props.initialRoute)
    const navigate = (path) => {
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

    const { height, width } = Dimensions.get("window")
    const flatListRef = useRef()
    const currentIndex = useRef(0);

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
                if (gestureState.dx > 0) {
                    if (currentIndex.current === 0) {
                        flatListRef.current.scrollToIndex({ viewPosition: 0.5, index: 0 })
                    } else {
                        flatListRef.current.scrollToIndex({ viewPosition: 0.5, index: currentIndex.current - 1 })
                        currentIndex.current = currentIndex.current - 1;
                    }
                } else if (gestureState.dx < 0) {
                    if (currentIndex.current === 2) {
                        flatListRef.current.scrollToIndex({ viewPosition: 0.5, index: 2 })
                    } else {
                        flatListRef.current.scrollToIndex({ viewPosition: 0.5, index: currentIndex.current + 1 })
                        currentIndex.current = currentIndex.current + 1;
                    }
                }
                changePath()
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
    const pressToChangeScreen = (index) => {
        flatListRef.current.scrollToIndex({ viewPosition: 0.5, index: index })
        currentIndex.current = index;

    }
    const renderScreen = ({ index }) => {
        return React.cloneElement(<View style={{ width: width }}>{props.children[index]}</View>, {
            path: path,
            navigate: navigate,
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

    return (
        <View style={style.container} >
            {!HIDEFROM.includes(path) && <View style={{ zIndex: 1, height: "6.5%", width: "100%", backgroundColor: "#F5F5F5", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "#30475E", fontSize: 25, fontWeight: "600" }}>Comminity</Text>
            </View>}
            <View style={{ height: "87%", width: width, paddingHorizontal: "5%", alignItems: "center" }}>
                <FlatList
                    ref={flatListRef}
                    {...panResponder.panHandlers}
                    horizontal
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    style={{ height: "100%", width: "300%" }}
                    contentContainerStyle={{ height: "100%", paddingHorizontal: "31.5%" }}
                    scrollEnabled={false}
                    data={[{ id: 0 }, { id: 1 }, { id: 2 }]}
                    renderItem={renderScreen}
                    keyExtractor={tut => tut.id}
                />
            </View>
            {!HIDEFROM.includes(path) &&
                <View style={{ height: "6.5%", width: "100%", backgroundColor: "#F5F5F5", flexDirection: "row", justifyContent: "space-evenly" }}>
                    <View style={{ borderRadius: 25, height: "100%", width: "20%", overflow: "hidden" }}>
                        <Pressable android_ripple={{ color: "#b6bbbe" }} onPress={() => {
                            pressToChangeScreen(0)
                            navigate(PATH.SCREEN1)
                        }} style={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: path === PATH.SCREEN1 ? "red" : "#000000" }} >{PATH.SCREEN1}</Text>
                        </Pressable>
                    </View>
                    <View style={{ borderRadius: 25, height: "100%", width: "20%", overflow: "hidden" }}>
                        <Pressable android_ripple={{ color: "#b6bbbe" }} onPress={() => {
                            pressToChangeScreen(1)
                            navigate(PATH.SCREEN2)
                        }} style={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: path === PATH.SCREEN2 ? "red" : "#000000" }} >{PATH.SCREEN2}</Text>
                        </Pressable>
                    </View>
                    <View style={{ borderRadius: 25, height: "100%", width: "20%", overflow: "hidden" }}>
                        <Pressable android_ripple={{ color: "#b6bbbe" }} onPress={() => {
                            pressToChangeScreen(2)
                            navigate(PATH.SCREEN3)
                        }} style={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: path === PATH.SCREEN3 ? "red" : "#000000" }} >{PATH.SCREEN3}</Text>
                        </Pressable>
                    </View>
                </View>
            }
        </View>
    )
}
export default SwipeTabs;