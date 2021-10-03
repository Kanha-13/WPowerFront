import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import VerticalSlider from '../VerticalSlidder';
import fetchMyDeviceStatus from '../fetchMyDeviceStatus'
import { generateSOS, iAMsafe } from '../../socket_transport'
import { StateContext } from '../StateProvider';

const DetailAndHelp = ({ callSOS }) => {
  const controllerStore = useContext(StateContext)
  const { helpCalled, setHelpCalled, DeviceState } = controllerStore
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
              width: "70%",
              height: 185,
              backgroundColor: helpCalled ? "green" : "red",
              borderRadius: 130,
              justifyContent: "center",
              alignSelf: "center"
            }}
            onPress={(e) => {
              if (helpCalled) {
                iAMsafe()
                setHelpCalled(false)
              } else {
                callSOS();
                setHelpCalled(true)
              }
            }}
          >
            <Text style={{
              fontSize: helpCalled ? 40 : 60,
              fontWeight: "bold",
              color: 'white',
              textAlign: "center",
              alignSelf: "center"

            }}>{helpCalled ? "I am safe Now" : "Help"}</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>My Details</Text>
        {/* <Text>Location: {myCords.latitude} , {myCords.longitude}</Text> */}
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