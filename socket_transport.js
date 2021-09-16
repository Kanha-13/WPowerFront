// export const socket_transport=(socket,)=>{


// }

export const liveFamilyLocation = (socket) => {
  socket.on("familyLocation", (payload) => {
    console.log(payload)
  })

}