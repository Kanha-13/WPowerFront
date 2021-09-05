import { Dimensions, PixelRatio } from 'react-native';
const { height } = Dimensions.get('screen');
export const DrawerState = {
  Open: height - 230,
  Peek: 230,
  Closed: 0,
}