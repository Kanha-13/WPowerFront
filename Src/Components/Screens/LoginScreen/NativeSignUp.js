import React, { useState } from 'react'
import { View, Pressable, Text } from 'react-native'
import Email from './Email'
import EmailOtp from './EmailOtp'
import MobileOtp from './MobileOtp'
import MobileNumber from './MobileNumber'
import Name from './Name'
import { getEmailOtp, verifyEmailOtp, getOtp, verifyOtp } from './SessionManager'
const NativeSignUp = ({ onBackPress, onVerify }) => {
  const [confirm, setConfirm] = useState("")
  const [step, setStep] = useState(0)
  const [userDetails, setUserDetails] = useState({})
  const requestEmailOtp = async () => {
    const response = await getEmailOtp(userDetails.email);
    console.log(response)
  }
  const validateEmailOtp = async () => {
    const response = await verifyEmailOtp(userDetails.email, userDetails.emailOpt)
    console.log(response)
  }
  const requestMobileOtp = async () => {
    const confirmCode = await getOtp(userDetails.mobileNumber)
    setConfirm(confirmCode)
  }
  const validateMobileOtp = async () => {
    const response = await verifyOtp(confirm, otp)
    if (response)
      onVerify()
  }

  const onNext = async () => {
    if (step === 1) {
      await requestEmailOtp();
    }
    else if (step === 2) {
      await validateEmailOtp();
    } else if (step === 3) {
      await requestMobileOtp();
    } else if (step === 3) {
      await validateMobileOtp()
    }
    setStep(prev => prev + 1)
    console.log(userDetails)
  }
  const onBack = () => {
    if (step === 0)
      onBackPress()
    else
      setStep(prev => prev - 1)
  }
  const onTextChange = (field, value) => {
    setUserDetails({ ...userDetails, [field]: value })
  }
  return (
    <View style={{
      width: "100%", height: "100%", backgroundColor: "#ffffff", padding: 20
    }}>
      <Pressable onPress={onBack}>
        <Text style={{ color: "#000000", fontSize: 22, fontWeight: "bold" }}>&lt;</Text>
      </Pressable>
      {
        step === 0 ? <Name onChange={onTextChange} /> :
          step === 1 ? <Email onChange={onTextChange} /> :
            step === 2 ? <EmailOtp onChange={onTextChange} /> :
              step === 3 ? <MobileNumber onChange={onTextChange} /> :
                step === 4 ? <MobileOtp onChange={onTextChange} /> : <></>
      }
      <Pressable onPress={onNext}
        style={{
          width: "30%",
          backgroundColor: "purple", alignItems: "center",
          justifyContent: "center", height: 45, borderRadius: 5,
          alignSelf: "flex-end"
        }}>
        <Text style={{ color: "#ffffff" }}>Next</Text>
      </Pressable>
    </View>
  );
}
export default NativeSignUp;