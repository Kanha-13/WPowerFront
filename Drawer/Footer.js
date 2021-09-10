import React from 'react'
import TabButton from './Utility/TabButtonTamplate';
import { View } from 'react-native';
import logout from '../assets/home.png'
const Footer = ({ currentTab, setCurrentTab }) => {
  return (
    <>
      <View>
        {TabButton(currentTab, setCurrentTab, "logout", logout)}
      </View>
    </>
  );
}
export default Footer