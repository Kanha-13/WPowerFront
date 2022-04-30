import { PermissionsAndroid, Alert, Linking } from 'react-native'
const checkAllPermissions = async () => {
  const callPermission = await PermissionsAndroid.check("android.permission.CALL_PHONE")
  const internetPermission = await PermissionsAndroid.check("android.permission.INTERNET")
  const gpsPermission = await PermissionsAndroid.check("android.permission.ACCESS_FINE_LOCATION")
  return { callPermission, internetPermission, gpsPermission }
}
export const permissionsManager = async () => {
  const { callPermission, internetPermission, gpsPermission } = await checkAllPermissions();
  if (!callPermission) {
    const res = await PermissionsAndroid.request("android.permission.CALL_PHONE")
    if (res === "never_ask_again" || res === "denied") {
      Alert.alert("Please allow phone call permission", "Click on open settings > Permissions > Phone > Allow", [{ text: "Open Settings", onPress: () => { Linking.openSettings() } }])

    }
  }
  if (!internetPermission) {
    const res = await PermissionsAndroid.request("android.permission.INTERNET")
    if (res === "never_ask_again" || res === "denied") {
      Alert.alert("Please allow phone Internet permission", "Turn on your wifi or mobile network")
    }
  }
  if (!gpsPermission) {
    const res = await PermissionsAndroid.request("android.permission.ACCESS_FINE_LOCATION")
    if (res === "never_ask_again" || res === "denied") {
      Alert.alert("Please allow phone location permission", "Click on open settings > Permissions > location > Allow all the time", [{ text: "Open Settings", onPress: () => { Linking.openSettings() } }])
    }

  }

}