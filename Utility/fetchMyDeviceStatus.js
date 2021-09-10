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

export default DeviceState = async () => {
  const { mobileNumber } = await DeviceNumber.get();
  let phoneNumber = mobileNumber;
  console.log(phoneNumber)
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
