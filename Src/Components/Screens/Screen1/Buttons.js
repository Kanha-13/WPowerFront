import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native'
import { style, buttonStyle } from './style';
const Button = ({ title, onClick }) => {
  return (
    <Pressable android_ripple={{
      color: "gray",
      foreground: true
    }} onPress={onClick} style={[style.centerAlign, buttonStyle.button]}>
      <Text style={{ color: "#000000", fontWeight: "300", fontSize: 25 }}>{title}</Text>
    </Pressable>
  );
}

export default Button;