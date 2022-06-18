import React, { useState } from 'react'
import { View, Pressable, Text, TextInput } from 'react-native'
const Name = ({ onChange }) => {
  return (
    <View style={{
      paddingHorizontal: 20, paddingVertical: 30,
      width: "100%", justifyContent: "space-between",
      flex: 1
    }}>
      <View>
        <Text style={{ color: "#000000", marginTop: 20 }}>Name</Text>
        <TextInput autoFocus={true} focusable={true} onChangeText={(text) => onChange("name", text)} style={{ borderRadius: 5, borderWidth: 1, color: "#000000" }} placeholderTextColor="#000000" placeholder='Enter your name' />
      </View>
    </View>
  );
}
export default Name;