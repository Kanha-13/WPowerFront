import Geolocation from '@react-native-community/geolocation';
const fetchLocation = async (setLocation) => {
  setInterval(() => {
    Geolocation.getCurrentPosition(location => {
      console.log(location)
      if (location.mocked) {
        alert('You have mocked the location please use real location')
      } else {
        setLocation({ latitude: location.coords.latitude, longitude: location.coords.longitude })
      }
    })
  }, 500);
}