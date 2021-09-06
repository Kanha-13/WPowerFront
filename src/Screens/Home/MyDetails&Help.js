import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import VMD from '../VerticalMapDrawer';
const DetailAndHelp = ({ myCords }) => {
  return (
    <VMD>
      <View style={{
        display: "flex",
        flexGrow: 1,
        paddingHorizontal: 15,
      }}>
        <Text>Helloooo</Text>
        <Text>{myCords.latitude} {myCords.longitude}</Text>

        <View style={{
          backgroundColor: "white",
          borderRadius: 30,
          alignSelf: "center",
          width: "65%",
          justifyContent: "center",
          height: 250,
          marginVertical: 30,
        }}>

          <TouchableOpacity
            style={{
              width: "100%",
              height: 250,
              alignSelf: "center",
              backgroundColor: "red",
              borderRadius: 130,
              justifyContent: "center"
            }}
            onPress={() => {

            }}
          >
            <View style={{
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center"
            }}>

              <Text style={{
                fontSize: 60,
                fontWeight: "bold",
                paddingLeft: 15,
                color: 'white',
                textAlign: "center",
                alignSelf: "center"

              }}>Help</Text>
            </View>

          </TouchableOpacity>
        </View>
      </View>
    </VMD>
  );
}
export default DetailAndHelp;