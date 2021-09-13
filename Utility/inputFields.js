import React from 'react'
import { View, Text, TextInput } from "react-native";
const InputField = ({ editMode, title, name, setMyDetails, myDetails }) => {
  return (
    <View style={{
      // backgroundColor: "#E1E5EA",
      // backgroundColor: "#CECECB",
      width: "95%",
      alignSelf: "center",
      padding: 5,
      borderRadius: 10,
      marginTop: 10
    }}>
      <Text>{title}</Text>
      <TextInput
        editable={name === 'mobileNumber' ? false : (editMode ? true : false)}
        autoFocus={true}
        value={name === 'mobileNumber' ? myDetails.mobileNumber : null}
        selectTextOnFocus={false}
        style={{
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