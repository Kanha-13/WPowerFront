import React, { useState } from 'react'
import { View, Pressable, Text, TextInput } from 'react-native'
const Email = ({ onChange }) => {
  return (
    <View style={{
      paddingHorizontal: 20, paddingVertical: 30,
      width: "100%", justifyContent: "space-between",
      flex: 1
    }}>
      <View>
        <Text style={{ color: "#000000", marginTop: 20 }}>Email</Text>
        <TextInput autoFocus={true} focusable={true} onChangeText={(text) => onChange("email", text)} style={{ borderRadius: 5, borderWidth: 1, color: "#000000" }} placeholderTextColor="#000000" placeholder='Enter your Email' />
      </View>
    </View>
  );
}
export default Email;