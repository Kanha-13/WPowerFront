import React from 'react'
import profile from '../assets/kanha.jpg'
import { Image, Text, TouchableOpacity } from 'react-native'
const Header = () => {
  return (
    <>
      <Image source={profile} style={{ width: 60, height: 60, borderRadius: 10, marginTop: 10 }} ></Image>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: "white", marginTop: 20 }}>Kanha Agrawal</Text>
      <TouchableOpacity>
        <Text style={{ marginTop: 6, color: "white" }}>View Profile</Text>
      </TouchableOpacity>
    </>
  );
}
export default Header