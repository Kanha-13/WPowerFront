import React from 'react'
import VerticalSlider from 'rn-vertical-slider';
import Drawer from './Drawer/DrawerPallate';
import Home from './src/Screens/Home/Home';
const App = () => {
  return (
    <Drawer>
      <Home currentTab={Drawer.currentTab} />
    </Drawer>
  );
}
export default App;