export const MakeConnection = (callback, onRecieveHelpReq, onRecieveSafeRequest) => {
  try {
    const ws = new WebSocket('ws://192.168.29.59:1310/');
    WebSocket.prototype.emit = function (eventName, payload) {
      this.send(JSON.stringify({ eventName, payload }));
    }
    callback(ws)
    ws.onopen = () => {//if backend accepts the connection this event will fire
      ws.send('something');  // send a message //here we can send the users mobile number or anything
    };

    ws.onmessage = (e) => {//for receiveing any message from server anytime
      // a message was received
      const message = JSON.parse(e.data)
      if (message.needYourHelp) {//message contains all help requests
        onRecieveHelpReq(message.needYourHelp)
      }
      else if (message.thisPersonIsSafeNow) {//some other message
        onRecieveSafeRequest(message.thisPersonIsSafeNow)
      }

    };

    ws.onerror = (e) => {//for any server or internal or internet errors
      // an error occurred
      console.log(e.message);
    };

    ws.onclose = (e) => {//when the connection is closed by the client or the server this event is fired
      // connection closed
      console.log(e.code, e.reason);
    };

    ws.addEventListener('helpMe', (data) => {
      // data.data contains your forwarded data
      console.log(data.data)
    })
    // ws.emit('helpMe', { a: 1, b: 2 });
    return (ws)
  } catch (error) {
    alert("Not able to connect with server!")
  }
}