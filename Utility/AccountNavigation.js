import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import { Link } from "react-router-native";
//for multiple buttons
const AccountNavigation = (setCurrentTab, title, label) => {
  return (
    <TouchableOpacity
      style={{
        // backgroundColor: "#CECECB",
        backgroundColor: "#828686",
        margin: 10,
        alignSelf: "center",
        borderRadius: 15,
      }}
    >
      <Link to={`/${title}`}
        onPress={() => setCurrentTab(`${title}`)}
        underlayColor="none"
      >
        <View
          style={{
            width: 350,
            height: 50,
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "white",
              // fontWeight: "bold"
            }}
          >{label}</Text>
        </View>
      </Link>
    </TouchableOpacity>
  )
}
export default AccountNavigation;