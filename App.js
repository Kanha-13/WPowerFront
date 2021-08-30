import React from 'react'
import Drawer from './Drawer/DrawerPallate';
import Home from './Screens/Home/Home';
const App = () => {
  return (
    <Drawer>
      <Home currentTab={Drawer.currentTab} />
    </Drawer>
  );
}
export default App;