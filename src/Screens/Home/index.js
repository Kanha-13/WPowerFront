import React, { useContext } from "react";
import { Pressable } from 'react-native'
import { View, Text, TouchableOpacity, Image } from "react-native";
import { StateContext } from "../../../Utility/StateProvider";
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import { style } from "./style";
import { iAMsafe } from "../../../socket_transport";
const Home = () => {
  const Controller = useContext(StateContext);
  const { helpCalled, setHelpCalled, callSOS, socket } = Controller

  return (
    <View style={style.containerWrapper}>
      <View style={style.container}>
        <View style={style.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => { RNImmediatePhoneCall.immediatePhoneCall('1091'); }}
            style={style.buttons}>
            <Image style={{ width: "60%", height: "70%" }} source={require('../../../assets/police.png')} ></Image>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => { RNImmediatePhoneCall.immediatePhoneCall('8319115373'); }}
            style={[style.buttons, { alignItems: "flex-end" }]}>
            <Image style={{ width: "68%", height: "60%" }} source={require('../../../assets/ambulance.png')} ></Image>
          </TouchableOpacity>
        </View>
        <Pressable
          style={[style.helpContainer, { backgroundColor: helpCalled ? "green" : "red" }]}
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
          <Text style={{
            fontSize: helpCalled ? 40 : 60,
            fontWeight: "bold",
            color: 'white',
            textAlign: "center",
            alignSelf: "center"

          }}>{helpCalled ? "I am safe Now" : "Help"}</Text>
        </Pressable>
        <View style={style.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.75}
            style={[style.buttons, { justifyContent: "flex-end" }]}>
            <Image style={{ width: "70%", height: "80%" }} source={require('../../../assets/family.png')} ></Image>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.75}
            style={[style.buttons, { alignItems: "flex-end", justifyContent: "flex-end" }]}>
            <Image style={{ width: "65%", height: "70%" }} source={require('../../../assets/nearHelp.png')} ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Home;