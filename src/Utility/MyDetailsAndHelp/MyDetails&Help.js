import React, { useEffect, useState } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import VerticalSlider from '../../Utility/VerticalSlidder';
import fetchMyDeviceStatus from '../../../Utility/fetchMyDeviceStatus';
const DetailAndHelp = ({ myCords }) => {
  const [DeviceState, setDeviceState] = useState({
    phoneNumber: "",
    brand: "",
    powerState: { batteryLevel: "", batteryState: "", lowPowerMode: true },
    fingerPrint: "",
    mnf: "",
    ipAdd: "",
    uniqueId: "",
    carrier: "",
  })
  const getDeviceState = async () => {
    const details = await fetchMyDeviceStatus()
    setDeviceState(details)
  }
  useEffect(() => {
    getDeviceState()
  }, [])
  const { phoneNumber, brand, powerState, fingerPrint, model, deviceType, mnf, ipAdd, uniqueId, carrier } = DeviceState
  return (
    <VerticalSlider>
      <View style={{
        display: "flex",
        flexGrow: 1,
        paddingHorizontal: 15,
      }}>
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
              // CallHelp(myCords);
            }}
          >
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
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>My Details</Text>
        <Text>Location: {myCords.latitude} , {myCords.longitude}</Text>
        <Text>Phone Number: {phoneNumber}</Text>
        <Text>Mobile Brand: {brand}</Text>
        <Text>Model: {model}</Text>
        <Text>Device Type: {deviceType}</Text>
        <Text>Battery Level: {Math.round(powerState.batteryLevel * 100)}%</Text>
        <Text>Charging State: {powerState.batteryState}</Text>
        <Text>On powerSaving: {(powerState.lowPowerMode).toString()}</Text>
        <Text>Manufacturer: {mnf}</Text>
        <Text>IP Address: {ipAdd}</Text>
        <Text>Unique Id: {uniqueId}</Text>
        <Text>Network Carrier: {carrier}</Text>
      </View>
    </VerticalSlider>
  );
}
export default DetailAndHelp;