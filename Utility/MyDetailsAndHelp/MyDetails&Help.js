import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import VerticalSlider from '../VerticalSlidder';
import { iAMsafe } from '../../socket_transport'
import { StateContext } from '../StateProvider';
import { style } from './style';

const DetailAndHelp = ({ callSOS }) => {
  const controllerStore = useContext(StateContext)
  const { helpCalled, setHelpCalled, DeviceState, socket } = controllerStore
  const { phoneNumber, brand, powerState, model, deviceType, mnf, ipAdd, uniqueId, carrier } = DeviceState
  return (
    <VerticalSlider >
      <View style={style.containerWrapper}>
        <View style={style.container}>
          <TouchableOpacity
            style={[style.button, { backgroundColor: helpCalled ? "green" : "red" }]}
            onPress={(e) => {
              if (helpCalled) {
                iAMsafe(socket)
                setHelpCalled(false)
              } else {
                callSOS();
                setHelpCalled(true)
              }
            }}
          >
            <Text style={[style.buttonText, { fontSize: helpCalled ? 40 : 60 }]}>{helpCalled ? "I am safe Now" : "Help"}</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>My Details</Text>
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