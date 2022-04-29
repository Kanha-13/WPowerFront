import RNImmediatePhoneCall from 'react-native-immediate-phone-call';

export const callFamily = () => {
  console.log("Calling family for help")
  return 0;
}

export const callNearBy = () => {
  console.log("calling near by people for help!")
  return 0;
}

export const callAmbulance = () => {
  console.log("calling ambulance for help")
  RNImmediatePhoneCall.immediatePhoneCall('0123456789');
  return 0;
}
export const callPolice = () => {
  console.log("calling police for help")
  RNImmediatePhoneCall.immediatePhoneCall('0123456789');
  return 0;
}