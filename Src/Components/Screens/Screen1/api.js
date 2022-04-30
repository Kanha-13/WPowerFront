import RNImmediatePhoneCall from "react-native-immediate-phone-call";
export const callFamily = () => {
  console.log("Calling family for help")
  return 0;
}

export const callNearBy = () => {
  console.log("calling near by people for help!")
  return 0;
}

export const callAmbulance = () => {
  RNImmediatePhoneCall.immediatePhoneCall("0123456789")
  console.log("calling ambulance for help")
  return 0;
}
export const callPolice = () => {
  RNImmediatePhoneCall.immediatePhoneCall("8319115373")
  console.log("calling police for help")
  return 0;
}