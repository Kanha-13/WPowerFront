import {
  getUniqueId,
  getManufacturer,
  getBrand,
  getFingerprint,
  getIpAddress,
  getPhoneNumber,
  getPowerState,
  getCarrier,
  getModel,
  getDeviceType,
} from 'react-native-device-info';
export default DeviceState = async () => {
  const details = {
    phoneNumber: await getPhoneNumber(),
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

