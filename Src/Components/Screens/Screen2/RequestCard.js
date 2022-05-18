import React from 'react';
import { View, Text, Pressable } from 'react-native'
const RequestCard = ({ data, onClick, index }) => {
  console.log(index)
  return (
    <Pressable onPress={() => onClick(index)} style={{ borderRadius: 5, marginVertical: 5, backgroundColor: '#ffffff', padding: 10, width: "90%", alignSelf: 'center' }}>
      <Text style={{ color: "#000000" }}>This Person is located at: </Text>
      <Text style={{ color: "#000000" }}>{data?.cords?.latitude}</Text>
      <Text style={{ color: "#000000" }}>{data?.cords?.longitude}</Text>
    </Pressable>
  )
}
export default RequestCard;