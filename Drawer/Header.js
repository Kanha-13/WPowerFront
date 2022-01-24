import React from 'react'
import profile from '../assets/kanha.jpg'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Link } from "react-router-native";
const Header = ({ setShowMenu, setCurrentTab }) => {
  return (
    <>
      <Image source={profile} style={{ width: 60, height: 60, borderRadius: 10, marginTop: 10 }} ></Image>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: "white", marginTop: 20 }}>Kanha Agrawal</Text>
      <View style={{ width: "100%", alignItems: "center", flexDirection: "row" }}>
        <Text style={{ marginTop: 6, color: "white" }}>Profile reputation </Text>
        <Text style={{ color: "green", marginTop: 6 }}> 100%</Text>
      </View>
    </>
  );
}
export default Header