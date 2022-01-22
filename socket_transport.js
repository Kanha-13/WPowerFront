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
      // socket.emit("location", await getCurrentLocation())
    } else {
      clearInterval(interval)
      return
    }
  }, 4000)
  return () => clearInterval(interval)
}

export const generateSOS = async (socket) => {
  CallHelp = true;
  console.log("func is still running 1")
  emitMyLocation(socket)
}

export const iAMsafe = (socket) => {
  CallHelp = false;
  socket.emit("stop", { message: "stop" })
  socket.emit("iamsafe", { message: "I am safe now" })
}
