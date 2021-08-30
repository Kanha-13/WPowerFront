import React from "react"
import profile from '../../assets/kanha.jpg'
import { Text, Image } from "react-native";
const Home = () => {
  return (
    <>

      <Image source={profile} style={{
        width: "100%",
        height: 300,
        borderRadius: 15,
        marginTop: 20,
      }}></Image>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 15,
        paddingBottom: 5,
      }} >Kanha Agrawal.....</Text>
      <Text style={{
      }}>Hi there , this is my first react-native app
      </Text>
    </>
  );
}
export default Home