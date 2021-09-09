import React, { useEffect } from 'react'
import Drawer from './Drawer/DrawerPallate';
import Home from './src/Screens/Home/Home';
import { StatusBar } from 'react-native';
const App = () => {
  const loadData = async () => {
    const data = await SyncStorage.init();
    console.log('AsyncStorage is ready!', data);
  }
  useEffect(() => {
    loadData()
  }, [])
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle="dark-content" type="dark" />
      <Drawer>
        <Home currentTab={Drawer.currentTab} />
      </Drawer>
    </>
  );
}
export default App;