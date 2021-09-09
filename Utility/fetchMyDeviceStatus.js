import ReactNative, { PermissionsAndroid } from 'react-native'
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
const { DeviceNumber } = NativeModules;
const IMEI = require('react-native-imei');

export default DeviceState = async () => {
  const mobileNumber = await DeviceNumber.get();
  console.log(mobileNumber)
  IMEI.getImei().then(imeiList => {
    console.log(imeiList)
  });
  const details = {
    // phoneNumber: mobileNumber,
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
