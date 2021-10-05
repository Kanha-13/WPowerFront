import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Link } from "react-router-native";
const MyGuardian = () => {
  return (
    <View style={{
      paddingTop: 90,
    }}>
      <View style={{
        backgroundColor: "white", padding: 20, width: "100%", borderRadius: 20, alignSelf: "center", height: "90%",
      }}
      >
        <TouchableOpacity>
          <Link to="/MyAccount" underlayColor="none" >
            <Image style={{ width: 35, height: 25 }} source={require('../../../assets/backArrow.png')}></Image>
          </Link>
        </TouchableOpacity>
        <Text style={{
          fontSize: 20, alignSelf: "center",
        }}>My Guardians</Text>
      </View>
    </View >
  );

}
export default MyGuardian
