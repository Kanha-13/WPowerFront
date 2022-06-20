import auth from '@react-native-firebase/auth'
// import axios from '../../../Utils/axios';
import axios from 'axios';
export const logOut = async () => {
  try {
    await auth().signOut();
  } catch (error) {
    console.log(error)
  }

}
//mobile otp
export const getOtp = async (mobileNumber) => {
  try {
    const confirmCode = await auth().signInWithPhoneNumber(`+91${mobileNumber}`)
    return confirmCode
  } catch (error) {
    console.log(error)
  }
}
//mobile otp
export const verifyOtp = async (confirm, otp) => {
  try {
    const response = await confirm.confirm(otp)
    console.log(response)
    return response
  } catch (error) {
    console.log(error.response.data)
    return error.response
  }
}
//email otp
export const getEmailOtp = async (email) => {
  try {
    const response = await axios.get(`http://192.168.29.59:1310/signup/${email}`)
    return response
  } catch (error) {
    console.log(error.response)
    return error.response
  }
}

export const verifyEmailOtp = async (email, otp, userDetails) => {
  try {
    console.log(email)
    const response = await axios.post(`http://192.168.29.59:1310/signup/${email}`, {
      otp: otp,
      user: userDetails
    })
    console.log("in resp", response)
    return response;
  } catch (error) {
    console.log(error.response)
    return error.response
  }
}