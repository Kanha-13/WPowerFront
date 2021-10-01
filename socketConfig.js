//=============================================
const makeConnection = () => {
  // This must be below your `window.navigator` hack above
  const io = require('socket.io-client/dist/socket.io');
  return socket = io('http://192.168.81.190:1312/', {
    transports: ['websocket'] // you need to explicitly tell it to use websockets
  });

}
export default makeConnection;
//==============================================