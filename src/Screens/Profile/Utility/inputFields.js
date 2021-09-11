import React from 'react'
import { View, Text, TextInput } from "react-native";
const InputField = ({ title, name, setMyDetails, myDetails }) => {
  return (
    <View style={{
      backgroundColor: "#CECECB",
      width: "95%",
      alignSelf: "center",
      padding: 20,
      borderRadius: 10,
      marginTop: 10
    }}>
      <Text>{title}</Text>
      <TextInput style={{
        color: "black",
        borderBottomWidth: 0.5,
      }}
        onChangeText={(value) => {
          setMyDetails({ ...myDetails, [name]: value })
        }}
      />
    </View>
  );
}
export default InputField;