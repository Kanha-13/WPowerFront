import SyncStorage from 'sync-storage';
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
import syncStorage from 'sync-storage';
const { DeviceNumber } = NativeModules;
// const IMEI = require('react-native-imei');

export default DeviceState = async () => {
  let phoneNumber = SyncStorage.get('mobileNumber')
  if (phoneNumber) {

  } else {
    const { mobileNumber } = await DeviceNumber.get();
    phoneNumber = mobileNumber;
    syncStorage.set('mobileNumber', mobileNumber)
  }
  console.log(phoneNumber)
  // IMEI.getImei().then(imeiList => {
  //   console.log(imeiList)
  // });
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
