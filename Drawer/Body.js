import React from 'react'
import { View } from 'react-native';
import TabButton from './Utility/TabButtonTamplate';

import home from '../assets/home.png'
import profile from '../assets/profile.png'
import account from '../assets/account.png'
import settings from '../assets/settings.png'
import nearBySos from '../assets/nearBySos.png'
const Body = ({ currentTab, setCurrentTab }) => {
  return (
    <>
      <View style={{ flexGrow: 1, marginTop: 50 }} >
        {
          //tab bar butrtons....
        }
        {TabButton(currentTab, setCurrentTab, "Home", home)}
        {TabButton(currentTab, setCurrentTab, "Profile", profile)}
        {TabButton(currentTab, setCurrentTab, "MyAccount", account)}
        {TabButton(currentTab, setCurrentTab, "Settings", settings)}
        {TabButton(currentTab, setCurrentTab, "NearBySOS", nearBySos)}
        {/* {TabButton(currentTab, setCurrentTab, "Notification", notification)}
        {TabButton(currentTab, setCurrentTab, "Settings", setting)} */}
      </View>
    </>
  );
}
export default Body;