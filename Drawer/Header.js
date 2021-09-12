import React from 'react'
import profile from '../assets/kanha.jpg'
import { Image, Text, TouchableOpacity } from 'react-native'
import { Link } from "react-router-native";
const Header = ({ setShowMenu, setCurrentTab }) => {
  return (
    <>
      <Image source={profile} style={{ width: 60, height: 60, borderRadius: 10, marginTop: 10 }} ></Image>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: "white", marginTop: 20 }}>Kanha Agrawal</Text>
      <TouchableOpacity >
        <Text style={{ marginTop: 6, color: "white" }}>Kuch tho aayega</Text>
      </TouchableOpacity>
    </>
  );
}
export default Header