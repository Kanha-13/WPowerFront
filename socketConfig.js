//=============================================
const makeConnection = () => {
  if (!window.location) {
    // App is running in simulator
    window.navigator.userAgent = 'ReactNative';
  }

  // This must be below your `window.navigator` hack above
  const io = require('socket.io-client/dist/socket.io');
  const socket = io('http://localhost:1312/', {
    transports: ['websocket'] // you need to explicitly tell it to use websockets
  });

  socket.on('connect', () => {
    console.log('connected!');
  });
  console.log(socket)
}
export default makeConnection;
//==============================================