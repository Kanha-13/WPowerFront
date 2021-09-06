import { PermissionsAndroid, Platform } from "react-native";
import Geolocation from 'react-native-geolocation-service'

export const getCurrentLocation = () => new Promise((resolve, reject) => {
  Geolocation.getCurrentPosition(
    position => {
      const cords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
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


export const locationPermission = () => new Promise(async (resolve, reject) => {
  if (Platform === "ios") {
    try {
      const permissionStatus = await Geolocation.requestAuthorization('whenInUse');
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
      resolve('granted');
    }
    return reject("Location permission denied");
  }).catch(error => {
    console.log("Ask location permission error:  ".error)
    return reject(error)
  })
})
