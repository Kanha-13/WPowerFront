import { getCurrentLocation } from "./Utility/CurrentLocation";
let CallHelp = false;
export const liveFamilyLocation = (socket) => {
  socket.on("familyLocation", (payload) => {
    console.log(payload)
  })
}
const emitMyLocation = (socket) => {
  let mounted = true;
  console.log(CallHelp)
  const interval = setInterval(async () => {
    if (CallHelp) {
      socket.emit("help", await getCurrentLocation())
      // socket.emit("location", await getCurrentLocation())
    } else {
      return
    }
  }, 4000)
  return () => clearInterval(interval)
  mounted = false;
}

export const generateSOS = async (socket) => {
  CallHelp = true;
  emitMyLocation(socket)
}

export const iAMsafe = () => {
  CallHelp = false;
}
