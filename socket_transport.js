import { getCurrentLocation } from "./Utility/CurrentLocation";
let CallHelp = false;
export const liveFamilyLocation = (socket) => {
  socket.on("familyLocation", (payload) => {
    console.log(payload)
  })
}

const emitMyLocation = async (socket, mobileNumber) => {
  socket.emit("create-help-room",
    { cords: await getCurrentLocation(), mobileNumber: mobileNumber })
  const interval = setInterval(async () => {
    if (CallHelp) {
      socket.emit("help", { cords: await getCurrentLocation(), mobileNumber: mobileNumber })
    } else {
      clearInterval(interval)
      return
    }
  }, 4000)
  return () => clearInterval(interval)
}

export const generateSOS = async (socket, mobileNumber) => {
  CallHelp = true;
  emitMyLocation(socket, mobileNumber)
}

export const iAMsafe = (socket) => {
  CallHelp = false;
  setTimeout(() => {
    socket.emit("iamsafe", { message: "I am safe now" })
  }, 4000);
}
