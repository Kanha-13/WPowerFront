import React, { useState, useContext } from 'react'
import { View, Pressable, Text, TextInput, Dimensions } from 'react-native'
import { getOtp, verifyOtp } from '../SessionManager'
import { StateContext } from '../../../../Utils/StateProvider';
import MobileNumber from './Utils/MobileNumber';
import Otp from './Utils/Otp';
import { checkUser } from '../api';

const SignIn = ({ navigate }) => {
  const { height, width } = Dimensions.get("window");
  const State = useContext(StateContext);
  const { onVerify } = State;
  const [mobileNumber, setMobileNumber] = useState("")
  const [confirm, setConfirm] = useState(null)
  const [otp, setOtp] = useState("")
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false)
  const [loadingMsg, setLoadingMsg] = useState("")

  const requestOtp = async () => {
    // setLoading(true)
    // setLoadingMsg("Sending otp...")
    console.log("sending...")
    const checkuser= await checkUser(mobileNumber);
    console.log(checkuser)
    // const confirmCode = await getOtp(mobileNumber);
    // if (confirmCode) {
    //   setLoading(false)
    // }
    // setConfirm(confirmCode)
    // setStep(1)
  }

  const checkOtp = async () => {
    setLoading(true);
    setLoadingMsg("Hold on verifying otp...");
    const response = await verifyOtp(confirm, otp);
    if (response) {
      setLoading(false)
      onVerify()
    }
  }

  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "#ffffff" }}>
      <Pressable onPress={() => navigate("LoginScreen")} style={{ alignSelf: "flex-start", margin: 20 }}>
        <Text style={{ color: "#000000", fontSize: 26 }}>&lt;</Text>
      </Pressable>
      {
        step === 0 ? <MobileNumber mobileNumber={mobileNumber} onChange={(text) => setMobileNumber(text)} requestOtp={requestOtp} /> :
          <Otp otp={otp} onChange={(text) => setOtp(text)} checkOtp={checkOtp} />
      }
      <View style={{
        display: loading ? "flex" : "none",
        justifyContent: "center", alignItems: "center",
        position: "absolute", height: height,
        backgroundColor: "gray", opacity: 0.4,
        width: width
      }}>
        <Text style={{ color: "#000000", fontSize: 25 }}>{loadingMsg}</Text>
      </View>
    </View>
  );
}

export default SignIn;