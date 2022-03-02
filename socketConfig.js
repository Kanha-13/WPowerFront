//=============================================
const makeConnection = (mobileNumber, location) => {
  const io = require('socket.io-client/dist/socket.io');
  // return socket = io('http://192.168.81.190:1312/', {
  return socket = io('http://192.168.29.59:1312/', {
    transports: ['websocket'],// you need to explicitly tell it to use websockets
    query: { mobileNumber: mobileNumber || '1234567890', latitude: location.latitude, longitude: location.longitude }
  });
}
export default makeConnection;
//==============================================