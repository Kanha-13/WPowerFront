import { PermissionsAndroid, Platform, Linking } from "react-native";
import Geolocation from 'react-native-geolocation-service'
import DeviceInfo from 'react-native-device-info'
import IntentLauncher, { IntentConstant } from 'react-native-intent-launcher'
const pkg = DeviceInfo.getBundleId();

const getCurrentCords = () => new Promise((resolve, reject) => {
  Geolocation.getCurrentPosition(
    position => {
      const cords = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
      resolve(cords)
    },
    error => {
      console.log(error)
      reject(error.message)
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  )
})

const openAppSettings = () => {
  if (Platform.OS === 'ios') {
    Linking.openURL('app-settings:')
  } else {
    // Linking.openSettings();
    IntentLauncher.startActivity({
      action: 'android.settings.APPLICATION_DETAILS_SETTINGS',
      data: 'package:' + pkg
    })
  }
}

const locationPermission = () => new Promise(async (resolve, reject) => {
  if (Platform === "ios") {
    try {
      const permissionStatus = await Geolocation.requestAuthorization('always');
      if (permissionStatus === 'granted') {
        openAppSettings()
        return resolve('granted')
      }
      reject('permission not granted')
    } catch (error) {
      console.log(error)
      return reject(error)
    }
  }
  debugger;
  return PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  ).then((granted) => {
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      openAppSettings()
      resolve('granted');
    }
    console.log(granted)
    return reject("Location permission denied");
  }).catch(error => {
    console.log("Ask location permission error:  ".error)
    return reject(error)
  })
})
export const getCurrentLocation = async () => {
  try {
    const permission = await locationPermission();
    if (permission) {
      return await getCurrentCords()
    } else {
      throw "Location permission denied"
    }
  } catch (error) {
    console.log(error)
    return error
  }
}

