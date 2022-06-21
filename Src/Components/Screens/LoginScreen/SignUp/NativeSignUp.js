import React, { useState,useContext } from 'react'
import { View, Pressable, Text, Dimensions } from 'react-native'
import Email from '../Utils/Email'
import EmailOtp from '../Utils/EmailOtp'
import MobileOtp from '../Utils/MobileOtp'
import MobileNumber from '../Utils/MobileNumber'
import Name from '../Utils/Name'
import { getEmailOtp, verifyEmailOtp, getOtp, verifyOtp } from '../SessionManager'
import { StateContext } from '../../../../Utils/StateProvider';
import { updateUserCredential } from '../api'
const NativeSignUp = ({ onBackPress, onVerify,alreadyExist }) => {
  const { height, width } = Dimensions.get("window")
  const State = useContext(StateContext);
  const {updateuserdata}=State;
  const [loading, setLoading] = useState(false)
  const [loadingMsg, setLoadingMsg] = useState("")
  const [confirm, setConfirm] = useState("")
  const [step, setStep] = useState(0)
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    emailOpt: "",
    mobileNumber: "",
    mobileOpt: ""
  })
  const ValidateEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userDetails.email)) {
      return true
    }
    alert("You have entered an invalid email address!")
    return false
  }
  const requestEmailOtp = async () => {
    if(ValidateEmail()){
      setLoading(true)
      const response = await getEmailOtp(userDetails.email);
      if (response.status===200) {
        setLoading(false)
        setStep(prev => prev + 1)
      }else if(response.status===206){
        setStep(prev=>prev+2)
      }else{
        alreadyExist()
      }
      setLoading(false)
    }
  }
  const validateEmailOtp = async () => {
    const response = await verifyEmailOtp(userDetails.email, userDetails.emailOpt, userDetails)
    if(response.status===401){
      alert("wrong otp")
    } else if (response.status===200) {
      setStep(prev => prev + 1)
      updateuserdata("email",userDetails.email)
    }else if (response.status===500) {
      alert("Server error")
    }
    setLoading(false)
  }
  const requestMobileOtp = async () => {
    const confirmCode = await getOtp(userDetails.mobileNumber)
    await updateUserCredential(userDetails)
    if (confirmCode) {
      setLoading(false)
      setStep(prev => prev + 1)
    }
    setConfirm(confirmCode)
  }
  const validateMobileOtp = async () => {
    console.log("in mobile otp verify")
    const response = await verifyOtp(confirm, userDetails.mobileOpt)
    if (response.user?.uid) {
      updateUserCredential(userDetails).then(()=>{
        onVerify()
      })
    }
    setLoading(false)
  }

  const onNext = async () => {
    if(step==0){
      setStep(1)
    } else if (step === 1) {
      setLoadingMsg("Sending OTP...")
      await requestEmailOtp();
    } else if (step === 2) {
      setLoading(true)
      setLoadingMsg("Hold on validating OTP...")
      await validateEmailOtp();
    } else if (step === 3) {
      setLoading(true)
      setLoadingMsg("Sending OTP...")
      await requestMobileOtp();
    } else if (step === 4) {
      setLoading(true)
      setLoadingMsg("Hold on validating OTP...")
      await validateMobileOtp()
    }
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
  const check = () => {
    if (step === 0 && userDetails.name === "") {
      return true
    }
    else if (step === 1 && userDetails.email === "") {
      return true
    }
    else if (step === 2 && userDetails.emailOpt === "") {
      return true
    }
    else if (step === 3 && userDetails.mobileNumber === "") {
      return true
    }
    else if (step === 4 && userDetails.mobileOpt === "") {
      return true
    }
    return false
  }
  return (
    <View style={{
      width: "100%", height: "100%", backgroundColor: "#f3e5cc", padding: 20
    }}>
      {
        step === 3?<></>:  <Pressable onPress={onBack}>
        <Text style={{ color: "#000000", fontSize: 22, fontWeight: "bold" }}>&lt;</Text>
      </Pressable>
      }
      {
        step === 0 ? <Name onChange={onTextChange} /> :
          step === 1 ? <Email onChange={onTextChange} /> :
            step === 2 ? <EmailOtp onChange={onTextChange} /> :
              step === 3 ? <MobileNumber onChange={onTextChange} /> :
                step === 4 ? <MobileOtp onChange={onTextChange} /> : <></>
      }
      <Pressable disabled={check() ? true : false} onPress={onNext}
        style={{
          width: "30%",
          backgroundColor: check() ? "#a97fa9" : "purple", alignItems: "center",
          justifyContent: "center", height: 45, borderRadius: 5,
          alignSelf: "flex-end"
        }}>
        <Text style={{ color: "#ffffff",fontWeight:"bold",fontSize:19 }}>Next</Text>
      </Pressable>
      <View style={{ display: loading ? "flex" : "none", justifyContent: "center", alignItems: "center", position: "absolute", height: height, backgroundColor: "gray", opacity: 0.4, width: width }}>
        <Text style={{ color: "#000000", fontSize: 25 }}>{loadingMsg}</Text>
      </View>
    </View>
  );
}
export default NativeSignUp;