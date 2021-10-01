import { getCurrentLocation } from "./Utility/CurrentLocation";

export const liveFamilyLocation = (socket) => {
  socket.on("familyLocation", (payload) => {
    console.log(payload)
  })
}

export const generateSOS = async (socket) => {
  socket.emit("help", await getCurrentLocation())
}

