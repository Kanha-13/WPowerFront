import React from 'react'
import { View, Text } from 'react-native'
import VMD from '../VerticalMapDrawer';
const DetailAndHelp = ({ myCords }) => {
  return (
    <VMD>
      <View style={{
        display: "flex",
        flexGrow: 1,
      }}>
        <Text>{myCords.latitude} {myCords.longitude}</Text>
      </View>
    </VMD>
  );
}
export default DetailAndHelp;