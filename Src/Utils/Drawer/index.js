import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import { logOut } from '../../Components/Screens/LoginScreen/SessionManager';
// import PATH from '../Constants/path'
const Drawer = ({ navigate, closeDrawer }) => {
  return (
    <View style={{ backgroundColor: "#000000", height: "100%", width: "100%", position: "absolute", zIndex: -1 }}>
      <View style={{ paddingLeft: 10, width: "60%", backgroundColor: "#D9EEF0", height: "100%" }}>
        {/* image block */}
        <View>
          <Text style={{ color: "#000000", fontSize: 25, fontWeight: "bold" }}>Kanha Agrawal</Text>
        </View>
        {/* list of tabs  */}
        <View>
          <Pressable onPress={() => {
            navigate('Map')
            closeDrawer(0)
          }}>
            <Text style={{ fontSize: 25, color: "black" }}>Map</Text>
          </Pressable>
        </View>
        <View>
          <Pressable onPress={logOut}>
            <Text style={{ color: "#000000" }}>SignOut</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
export default Drawer;