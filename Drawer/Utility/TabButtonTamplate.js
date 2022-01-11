import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import { Link } from "react-router-native";
//for multiple buttons
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (
    <TouchableOpacity>
      <Link to={title === 'Home' ? '/' : `/${title}`}
        underlayColor="none"
        onPress={() => {
          if (title == "Logout") {
            //logout event
          }
          else {
            setCurrentTab(title)
          }

        }}
      >
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          backgroundColor: currentTab === title ? "#ffffff" : "transparent",
          borderRadius: 8,
          paddingLeft: 13,
          paddingRight: 25,
          marginTop: 10,
        }}>
          <Image source={image} style={{
            height: 30,
            width: 25,
            tintColor: currentTab === title ? '#A7BBC7' : '#FAF3F3',
          }}></Image>
          <Text style={{
            color: currentTab === title ? '#000000' : '#ffffff',
            fontSize: 15,
            fontWeight: "bold",
            paddingLeft: 15,
          }}>{title}</Text>
        </View>
      </Link>
    </TouchableOpacity >
  )
}
export default TabButton;