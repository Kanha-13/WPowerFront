import RNImmediatePhoneCall from "react-native-immediate-phone-call";
import axios from "axios";
import { here_apikey } from "../../../../apikey";
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

export const reverseGeoCoding = async (cords) => {
  const res = await axios.get(`https://revgeocode.search.hereapi.com/v1/revgeocode?apiKey=${here_apikey}&at=${cords.latitude},${cords.longitude}&lang=en-US`)
  return res.data.items[0].address
}
