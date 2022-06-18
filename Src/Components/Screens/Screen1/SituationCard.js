import { View, Text, Pressable, Dimensions } from 'react-native'
import React from 'react';

const SituationCard = ({ title }) => {
  const { width } = Dimensions.get("screen")
  return (
    <Pressable style={{
      backgroundColor: '#dedfe2', width: width / 3,
      height: "60%", justifyContent: "center", alignItems: "center", margin: 20, borderRadius: 10, overflow: "hidden", elevation: 5
    }}>
      <Text style={{ color: "#000000", textAlign: "center", fontSize: 19, paddingHorizontal: 10 }}>{title}</Text>
    </Pressable>
  );
}
export default SituationCard;