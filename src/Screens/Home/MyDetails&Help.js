import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import VerticalSlider from '../VerticalSlider';
import CallHelp from '../../../Utility/callHelp';
const DetailAndHelp = ({ myCords }) => {
  const MyDetails = {
    Cords: myCords,
    batteryLvl: 0,

  }
  return (
    <VerticalSlider>
      <View style={{
        display: "flex",
        flexGrow: 1,
        paddingHorizontal: 15,
      }}>
        <Text>My Details</Text>
        <Text>{myCords.latitude} {myCords.longitude}</Text>

        <View style={{
          backgroundColor: "white",
          borderRadius: 30,
          alignSelf: "center",
          width: "65%",
          justifyContent: "center",
          height: 255,
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
              console.log("touched")
              CallHelp(myCords);
            }}
          >
            {/* <View style={{
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center"
            }}> */}

            <Text style={{
              fontSize: 60,
              fontWeight: "bold",
              paddingLeft: 15,
              color: 'white',
              textAlign: "center",
              alignSelf: "center"

            }}>Help</Text>
            {/* </View> */}

          </TouchableOpacity>
        </View>
      </View>
    </VerticalSlider>
  );
}
export default DetailAndHelp;