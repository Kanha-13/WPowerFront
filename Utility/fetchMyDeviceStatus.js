import {
  getUniqueId,
  getManufacturer,
  getBrand,
  getFingerprint,
  getIpAddress,
  getPowerState,
  getCarrier,
  getModel,
  getDeviceType,
} from 'react-native-device-info';
import { NativeModules } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { DeviceNumber } = NativeModules;

export default DeviceState = async () => {
  let phoneNumber = await getNumber()
  const details = {
    phoneNumber: phoneNumber,
    fingerPrint: await getFingerprint(),
    powerState: await getPowerState(),
    brand: getBrand(),
    model: getModel(),
    deviceType: getDeviceType(),
    mnf: await getManufacturer(),
    ipAdd: await getIpAddress(),
    uniqueId: getUniqueId(),
    carrier: await getCarrier(),
  }
  return details
}

const getNumber = async () => {
  let number = await AsyncStorage.getItem('mobileNumber')
  if (number === null) {
    const { mobileNumber } = await DeviceNumber.get();
    number = mobileNumber;
    try {
      await AsyncStorage.setItem('mobileNumber', mobileNumber)
    } catch (error) {
      console.log("error in saving number", error)
    }
  }
  return number
}