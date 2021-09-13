import { PermissionsAndroid, Platform } from "react-native";
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
export const getCurrentLocation = async () => {
  const permission = await locationPermission();
  if (permission) {
    return await getCurrentCords()
  }
}

