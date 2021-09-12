import React from 'react'
import addGuardian from '../../../assets/addGuardian.png'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { Link } from 'react-router-native';
const AddGurdianButton = () => {
  return (
    <TouchableOpacity style={{
      marginTop: 10,
      backgroundColor: "green",
      alignSelf: "flex-end",
      width: "40%",
      height: "40%",
      borderRadius: 10,
      display: "flex",
      justifyContent: "center"
    }}>
      <Link to='/AddGuardian'>
        <View style={{
          alignItems: "center",
          alignSelf: "center",
          display: "flex",
          flexDirection: "row",
        }}
        >
          <Image style={{
            width: 30,
            height: 30
          }}
            tintColor="#ffffff"
            source={addGuardian} />
          <Text style={{
            color: "#ffffff",
            alignSelf: "center",
            fontSize: 16
          }}> Add Guardian</Text>
        </View>
      </Link>
    </TouchableOpacity>
  );
}
export default AddGurdianButton;