import React from "react";
import { View, Text, Image, Pressable, StyleSheet, Dimensions, ScrollView } from "react-native";
const { height, width } = Dimensions.get("window")
const Structure = ({ title, desc1, desc2, image, btnLabel, onSkip, onNext }) => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={{
            alignItems: "center",
            height: "100%",
            justifyContent: "space-evenly"
        }}>
            {/* <Image style={styles.image} source={image} /> */}
            <Text style={styles.title}>{title}</Text>
            <View style={styles.descContainer}>
                <Text style={styles.desc}>{desc1}</Text>
                <Text style={styles.desc}>{desc2}</Text>
            </View>
            <View style={styles.btnContainer}>
                <Pressable onPress={onNext} style={styles.btn}><Text style={styles.btnLable}>{btnLabel}</Text></Pressable>
                <Pressable onPress={onSkip} ><Text style={styles.skip}>SKIP TUTORIAL</Text></Pressable>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        paddingHorizontal: 5,
        backgroundColor: "white"
    },
    image: {
        height: "35%",
        width: "100%",
        resizeMode: "contain"
    },
    title: {
        fontSize: 50,
        fontFamily: "montseraat_extrabold",
        color: "#46178f"
    },
    descContainer: {
        width: "90%",
        height: "23%",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    desc: {
        textAlign: "center",
        fontSize: 17,
        fontFamily: "montseraat_regular"
    },
    btnContainer: {
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    btn: {
        backgroundColor: "#46178f",
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        height: "23%",
        marginBottom: "5%",
        zIndex: 10
    },
    btnLable: {
        fontSize: 25,
        fontFamily: "montseraat_extrabold",
        color: "#FFFFFF",
    },
    skip: {
        fontSize: 19,
        fontFamily: "montseraat_regular",
        color: "#46178f"
    }
});
export default Structure;