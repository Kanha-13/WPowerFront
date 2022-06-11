import React from "react";
import { Pressable, Text, View, StatusBar, Image, ScrollView, TextInput } from "react-native";
// import userImage from '../../../assets/img/user.png'
import backIcon from '../../../assets/img/back.png'
import userImage from '../../../assets/img/me.jpeg'

const Profile = ({ navigate, goBack, userData = {}, width }) => {
    const renderImage = userData?.photoURL ? { uri: userData?.photoURL || " " } : userImage
    return (
        <View style={{
            height: "100%", width: width, backgroundColor: "#FFFFFF",
            overflow: "hidden"
        }}>
            {/* <StatusBar barStyle="light-content" translucent backgroundColor="transparent" /> */}
            <View
                style={{
                    height: "70%", width: "130%", borderRadius: 140, paddingBottom: 70, paddingTop: "19%",
                    transform: [{ rotate: '-15deg' }], overflow: "hidden", zIndex: 0, opacity: 0.6, backgroundColor: "#30475E",
                    alignSelf: "center", top: '-35%', left: '-15%'
                }}>
                <Image style={{
                    height: "100%", width: "90%", top: "40%",
                    alignSelf: "flex-end", backgroundColor: "#30475E",
                    transform: [{ rotate: '15deg' }]
                }} source={renderImage} />
            </View>

            <View style={{ flexDirection: "row", position: "absolute", marginTop: "10%", zIndex: 3, height: "5%", alignItems: "center", width: "100%" }}>
                <Pressable
                    onPress={() => goBack()}
                    style={{
                        width: "20%", height: "100%", alignItems: "center", justifyContent: "center"
                    }}>
                    <Image style={{ resizeMode: "contain", height: "50%", width: "70%", tintColor: "#ffffff" }} source={backIcon} />
                </Pressable>
                <Text style={{ fontWeight: "500", fontSize: 20, color: "#FFFFFF" }}>Profile</Text>
            </View>
            <Pressable android_ripple={{ color: "gray" }} style={{
                position: "absolute", height: "25%", width: "50%", top: "15%", zIndex: 6, alignSelf: "center",
                borderWidth: 5, borderRadius: 15, overflow: "hidden", borderColor: "#F5F5F5"
            }} >
                <Image style={{ height: "100%", width: "100%" }} source={renderImage} />
            </Pressable>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    // flex: 1,
                    height: "70%",
                    width: "90%", borderRadius: 10, top: "27%", zIndex: -1,
                    alignSelf: "center", backgroundColor: "#F5F5F5", position: "absolute"
                }}
                contentContainerStyle={{
                    flexGrow: 1, alignItems: "center",
                    paddingTop: width - width * 0.7, paddingHorizontal: "3%"
                }}
            >
                <Text style={{ color: "#30475E", fontSize: 23 }}>{userData.name}</Text>
                <TextInput value={userData.gender || "Man"} style={{ borderBottomColor: "#b6bbbe", borderBottomWidth: 0.2, height: 50, color: "#30475E", width: "100%", textAlign: "left" }} />
                <TextInput value={userData.age || "21"} style={{ borderBottomColor: "#b6bbbe", borderBottomWidth: 0.2, height: 50, color: "#30475E", width: "100%", textAlign: "left" }} />
                <TextInput value={userData.age || "Raipur"} style={{ borderBottomColor: "#b6bbbe", borderBottomWidth: 0.2, height: 50, color: "#30475E", width: "100%", textAlign: "left" }} />
                <Text style={{ color: "#30475E", fontSize: 18, marginTop: "8%", width: "100%" }}>My Story</Text>
                <TextInput value={userData.aboutMe}
                    multiline={true}
                    // numberOfLines={10}
                    placeholder="Tell us about yourself"
                    placeholderTextColor="#b6bbbe"
                    style={{
                        // textAlignVertical
                        flexGrow: 1, borderBottomColor: "#b6bbbe",
                        borderBottomWidth: 0.2, color: "#30475E", height: 200,
                        width: "100%", textAlign: "left", paddingBottom: 10, marginTop: 20
                    }} />
                <Text style={{ color: "#30475E", fontSize: 18, marginTop: "8%", width: "100%" }}>About Me</Text>
                <Text style={{ color: "#30475E", fontSize: 18, marginTop: "8%", width: "100%" }}>About Me</Text>
                <Text style={{ color: "#30475E", fontSize: 18, marginTop: "8%", width: "100%" }}>About Me</Text>
                <Text style={{ color: "#30475E", fontSize: 18, marginTop: "8%", width: "100%" }}>About Me</Text>
                <Text style={{ color: "#30475E", fontSize: 18, marginTop: "8%", width: "100%" }}>About Me</Text>

            </ScrollView>
            {/* <TouchableOpacity activeOpacity={0.8} style={{ marginTop: "40%", alignSelf: "flex-end", justifyContent: "center", alignItems: "center", backgroundColor: "#30475E", height: "7%", width: "16%", borderRadius: 50 }}>
        <Image style={{ tintColor: "#F5F5F5", height: "50%", width: "40%", resizeMode: "contain" }} source={editIcon} />
      </TouchableOpacity> */}
        </View>
    );
}
export default Profile;