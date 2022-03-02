import React, { useContext } from "react"
import { View } from "react-native";
import Map from "./Map";
import DetailAndHelp from "../../../Utility/MyDetailsAndHelp/MyDetails&Help";
import { generateSOS } from "../../../socket_transport";
import { StateContext } from "../../../Utility/StateProvider";
import { style } from "./style";
const NearBySOS = () => {
  const State = useContext(StateContext)
  const { socket, DeviceState } = State
  const callSOS = async () => {
    await generateSOS(socket, DeviceState.phoneNumber)
  }

  return (
    <View style={style.mainContaienr}>
      <Map />
      <DetailAndHelp callSOS={callSOS} />
    </View>
  );
}
export default NearBySOS