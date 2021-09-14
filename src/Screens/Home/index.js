import React from "react";
import { View, Text } from "react-native";
import { Dimensions } from "react-native";
const Home = ({ myCords }) => {
  const { height, width } = Dimensions.get('window');
  return (
    <View style={{
      paddingTop: 90,
    }}>
      <View style={{
        backgroundColor: "white",
        padding: 10,
        width: "100%",
        borderRadius: 20,
        alignSelf: "center",
        height: "97%",
      }}
      >
        {myCords && <Text>
          {myCords.latitude}
        </Text>}
        <Text>{height} height</Text>
        <Text>{width} height</Text>
      </View>
    </View>
  );
}
export default Home;