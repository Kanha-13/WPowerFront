import { getCurrentLocation } from "./Utility/CurrentLocation";

export const liveFamilyLocation = (socket) => {
  socket.on("familyLocation", (payload) => {
    console.log(payload)
  })
}

export const generateSOS = async (socket) => {
  let mounted = true;
  const interval = setInterval(async () => {
    socket.emit("help", await getCurrentLocation())
    // socket.emit("location", await getCurrentLocation())
  }, 4000)
  mounted = false;
  return () => clearInterval(interval)
}

