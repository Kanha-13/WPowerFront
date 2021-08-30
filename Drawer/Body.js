import React from 'react'
import { View } from 'react-native';
import TabButton from './Utility/TabButtonTamplate';

import home from '../assets/home.png'
import notification from '../assets/home.png'
import search from '../assets/home.png'
import setting from '../assets/home.png'
const Body = ({ currentTab, setCurrentTab }) => {
  return (
    <>
      <View style={{ flexGrow: 1, marginTop: 50 }} >
        {
          //tab bar butrtons....
        }
        {TabButton(currentTab, setCurrentTab, "Home", home)}
        {TabButton(currentTab, setCurrentTab, "Search", search)}
        {TabButton(currentTab, setCurrentTab, "Notification", notification)}
        {TabButton(currentTab, setCurrentTab, "Settings", setting)}
      </View>
    </>
  );
}
export default Body;