import React from 'react';
import { Pressable, Text, Image } from 'react-native'
import { style, buttonStyle } from './style';
const Button = ({ img, title, onClick }) => {
  return (
    <Pressable android_ripple={{
      color: "gray",
      foreground: true
    }} onPress={onClick} style={[style.centerAlign, buttonStyle.button]}>
      <Image source={img} style={{ height: "70%", width: "90%", resizeMode: "contain" }} />
      <Text style={{ color: "#000000", fontWeight: "300", fontSize: 20 }}>{title}</Text>
    </Pressable>
  );
}

export default Button;