// import { PermissionsAndroid, Linking, Alert } from 'react-native';
// import { GeolocationConfiguration } from '@react-native-community/geolocation';

// export const permissionsManager = async () => {
//   const { location, calling, internet } = await checkAllPermissions()
//   console.log(location, calling, internet)
//   if (!location) {
//     const resp = await PermissionsAndroid.request("android.permission.ACCESS_FINE_LOCATION")
//     console.log(resp)
//   }
//   if (!calling) {
//     const resp = await PermissionsAndroid.request("android.permission.CALL_PHONE")
//     console.log(resp)
//     if (resp === "never_ask_again" || resp === "denied") {

//       // console.log(Alert.prompt("Please allow phone calling to directly make call to your emergency contact from the app"))


//       await AsyncAlert('Allow phone call', 'Please allow phone calling to directly make call to your emergency contact from the app Settings > Permissions > Phone > Allow');
//       Linking.openSettings();
//       // Linking.openURL("app-settings")
//       // Linking.openURL("app-settings://notification/AwesomeProject")
//       // Linking.openURL("geo:37.48487,-122.148386")
//     }
//   }
//   if (!internet) {
//     const resp = await PermissionsAndroid.request("android.permission.INTERNET")
//     console.log(resp)
//   }
// }
// const checkAllPermissions = async () => {
//   const location = await PermissionsAndroid.check("android.permission.ACCESS_FINE_LOCATION")
//   const calling = await PermissionsAndroid.check("android.permission.CALL_PHONE")
//   const internet = await PermissionsAndroid.check("android.permission.INTERNET")
//   return { location, calling, internet }
// }
// const AsyncAlert = async (title, message) => new Promise((resolve) => {
//   Alert.alert(
//     title, message,
//     [
//       {
//         text: 'Open Settings',
//         onPress: () => {
//           resolve('YES');
//         },
//       },
//     ],
//     { cancelable: false },
//   );
// });


import { PermissionsAndroid, Platform, Linking } from "react-native";
import Geolocation from 'react-native-geolocation-service'

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

const locationPermission = () => new Promise(async (resolve, reject) => {
  if (Platform === "ios") {
    try {
      const permissionStatus = await Geolocation.requestAuthorization('always');
      if (permissionStatus === 'granted') {
        return resolve('granted')
      }
      reject('permission not granted')
    } catch (error) {
      console.log(error)
      return reject(error)
    }
  }
  return PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  ).then((granted) => {
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      // Linking.openSettings()
      resolve('granted');
    }
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

