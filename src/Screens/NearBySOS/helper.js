export const locateMe = (mapRef, myCords) => {
  console.log(mapRef.current, "========================", myCords)
  const newCamera = {
    center: { latitude: myCords.latitude, longitude: myCords.longitude },
    zoom: 15,
    heading: 0,
    pitch: 0,
    altitude: 5
  }
  mapRef.current.animateCamera(newCamera, { duration: 600 });
}