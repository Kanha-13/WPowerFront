import React from 'react'
import { Text, View } from 'react-native'
import AddGurdianButton from './AddGuardianButton';
const MyGuardian = () => {
  return (
    <View style={{
      paddingTop: 50,
    }}>
      <View style={{
        backgroundColor: "white",
        padding: 10,
        paddingTop: 20,
        width: "100%",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        alignSelf: "center"
      }}
      >
        <Text style={{
          fontSize: 20,
          fontWeight: "400"
        }}
        >My Gurdians</Text>
        <View style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#000000",
          alignSelf: "center",
          borderRadius: 5,
          marginVertical: 2,
        }}></View>
        <AddGurdianButton />
        {
          //added gurdian list render here
        }
      </View>
    </View>
  );
}
export default MyGuardian;