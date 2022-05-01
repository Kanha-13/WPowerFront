import auth from '@react-native-firebase/auth'
export const logOut = async () => {
  await auth().signOut();
}