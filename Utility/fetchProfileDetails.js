import AsyncStorage from '@react-native-async-storage/async-storage';

const getMyDetails = async () => {
  return await AsyncStorage.getItem('myDetails')
}
export default getMyDetails;