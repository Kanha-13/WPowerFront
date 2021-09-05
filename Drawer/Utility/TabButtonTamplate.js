import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
//for multiple buttons
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (
    <TouchableOpacity onPress={() => {
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
        backgroundColor: currentTab === title ? "white" : "transparent",
        borderRadius: 8,
        paddingLeft: 13,
        paddingRight: 25,
        marginTop: 10,
      }}>
        <Image source={image} style={{
          height: 20,
          width: 25,
          tintColor: currentTab === title ? 'black' : '#FAF3F3',
        }}></Image>
        <Text style={{
          fontSize: 15,
          fontWeight: "bold",
          paddingLeft: 15,
          color: currentTab === title ? 'black' : '#FAF3F3',
        }}>{title}</Text>
      </View>

    </TouchableOpacity>
  )
}
export default TabButton;