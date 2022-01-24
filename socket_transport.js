import { getCurrentLocation } from "./Utility/CurrentLocation";
let CallHelp = false;
export const liveFamilyLocation = (socket) => {
  socket.on("familyLocation", (payload) => {
    console.log(payload)
  })
}

const emitMyLocation = (socket) => {
  const interval = setInterval(async () => {
    if (CallHelp) {
      socket.emit("help", await getCurrentLocation())
    } else {
      clearInterval(interval)
      return
    }
  }, 4000)
  return () => clearInterval(interval)
}

export const generateSOS = async (socket) => {
  CallHelp = true;
  emitMyLocation(socket)
}

export const iAMsafe = (socket) => {
  CallHelp = false;
  setTimeout(() => {
    socket.emit("iamsafe", { message: "I am safe now" })
  }, 4000);
}
