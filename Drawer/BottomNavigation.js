import React from "react";
import { Pressable, View, Text, Image, Pressablege } from "react-native";
import { Dimensions } from "react-native";
import home from '../assets/home.png'
import nearBySos from '../assets/nearBySos.png'
import account from '../assets/account.png'
import { Link } from "react-router-native";
const BottomNavigation = ({ setCurrentTab, setCurrentNavigation, currentNavigation }) => {
  const { height, width } = Dimensions.get('window');
  return (
    <View style={{ flexDirection: "row", backgroundColor: "gray", height: height * 0.07, width: width }}>
      <View style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "33.1%",
        alignItems: "center",
        paddingTop: 5,

      }}>
        <Pressable style={{ width: "100%" }}>
          <Link to="/" underlayColor="none" onPress={() => {
            setCurrentTab("Home")
            setCurrentNavigation("Home")
          }}>
            <View style={{ alignItems: "center" }}>
              <Image height={1} width={1} style={{ height: 30, width: 30, tintColor: currentNavigation === 'Home' ? "#ffffff" : "#000000", }} source={home} />
              <Text style={{ fontWeight: "600" }} >Home</Text>
            </View>
          </Link>
        </Pressable>
      </View>
      <View style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "33.1%",
        alignItems: "center",
        paddingTop: 5,
      }}>
        <Pressable style={{ width: "100%" }}>
          <Link to="/NearBySOS" underlayColor="none" onPress={() => {
            setCurrentTab("NearBySOS")
            setCurrentNavigation("NearBySOS")
          }}>
            <View style={{ alignItems: "center" }}>
              <Image height={1} width={1} style={{ height: 30, width: 30, tintColor: currentNavigation === 'NearBySOS' ? "#ffffff" : "#000000", }} source={nearBySos} />
              <Text style={{ fontWeight: "600" }} >NearSOS</Text>
            </View>
          </Link>
        </Pressable>
      </View>
      <View style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "33.1%",
        alignItems: "center",
        paddingTop: 5,
      }}>
        <Pressable style={{ width: "100%" }}>
          <Link to="/MyAccount" underlayColor="none" onPress={() => {
            setCurrentTab("MyAccount")
            setCurrentNavigation("MyAccount")
          }}>
            <View style={{ alignItems: "center" }}>
              <Image height={1} width={1} style={{ height: 30, width: 30, tintColor: currentNavigation === 'MyAccount' ? "#ffffff" : "#000000", }} source={account} />{/* #A7BBC7*/}
              <Text style={{ fontWeight: "600" }} >Account</Text>
            </View>
          </Link>
        </Pressable>
      </View>

    </View>
  );
}
export default BottomNavigation;