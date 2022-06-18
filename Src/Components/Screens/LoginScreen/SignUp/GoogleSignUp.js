import React, { useState, useEffect } from 'react'
import { View, Pressable, Text } from 'react-native'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import MobileNumber from '../Utils/MobileNumber';
import MobileOpt from '../Utils/MobileOtp';
import { getOtp, verifyOtp } from '../SessionManager';

const GoogleSignUp = ({ onBackPress, onVerify }) => {
  // auth().user  
  const [googleCredentials, setGoogleCredentials] = useState(null);
  const [userData, setUserData] = useState({})
  const [confirm, setConfirm] = useState("")
  const [step, setStep] = useState(0)
  const GoogleSignUpAuth = async () => {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.log(googleCredential)
    setGoogleCredentials(googleCredential)
  }
  const updateUserData = (field, value) => {
    setUserData({ ...userData, [field]: value })
  }
  const getMobileOtp = async () => {
    const confirmCode = await getOtp(userData.mobileNumber)
    setConfirm(confirmCode)
  }
  const validateMobileOtp = async () => {
    const response = await verifyOtp(confirm, userData.mobileOpt)
    if (response) {
      auth().signInWithCredential(googleCredentials);
      onVerify()
    }
  }
  const onNext = () => {
    if (!step) {
      getMobileOtp()
      setStep(1)
    } else {
      validateMobileOtp()
    }
  }
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '460335149905-irfe94qb3995s6v4hee8cmffu1bn7jol.apps.googleusercontent.com',
    });
    GoogleSignUpAuth()
  }, [])

  useEffect(() => {
    if (step && googleCredentials === null) {
      GoogleSignUpAuth()
    }
  }, [step])
  return (
    <View style={{ padding: 30, width: "100%", height: "100%" }}>
      {
        step === 0 ? <MobileNumber onChange={updateUserData} /> :
          step === 1 ? <MobileOpt onChange={updateUserData} /> : <></>
      }
      <Pressable onPress={onNext} style={{ alignSelf: "flex-end", alignItems: "center", justifyContent: "center", backgroundColor: "purple", height: 45, width: 90 }}>
        <Text style={{ color: "#ffffff" }}>Next</Text>
      </Pressable>
    </View>
  );
}
export default GoogleSignUp;