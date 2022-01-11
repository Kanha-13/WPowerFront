import React, { useContext, useEffect } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import marker from '../../../assets/marker.png'
import { StateContext } from '../../../Utility/StateProvider';
const CustomMarker = () => (
  <View
    style={{
      height: 90,
      width: 80,
      borderRadius: 250,
      borderRadius: 15,
      overflow: "hidden"
    }}
  >
    <Image style={{ tintColor: "black", zIndex: 1, width: 75, height: 90, position: "absolute", alignSelf: "center" }} source={marker} />
    <View style={{ borderRadius: 50, width: 85, height: 95, overflow: "hidden", alignSelf: "center" }}>
      <Image style={{ top: 7, width: 63, height: 62, alignSelf: "center", borderRadius: 50 }} source={require("../../../assets/kanha.jpg")} />
    </View>
  </View>
);
const Map = () => {
  const State = useContext(StateContext);
  const { mapRef, myCords, helpCords } = State
  useEffect(() => {
    setTimeout(
      () => {
        if (mapRef.current && myCords.latitude) {
          const newCamera = {
            center: { latitude: myCords.latitude, longitude: myCords.longitude },
            zoom: 16,
            heading: 0,
            pitch: 0,
            altitude: 5
          }
          mapRef.current.animateCamera(newCamera, { duration: 600 });
        }
      }, 1000
    );
  }, [mapRef.current]);

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      ref={(map) => mapRef.current = map}
      animateCamera={
        {
          center: {
            latitude: 3.0256,
            longitude: 3.0256
          }, zoom: 200
        }, 5000
      }
      style={{
        width: "100%",
        height: "100%",
      }}
      mapTypeControlOptions={{
        style: "horizontalBar",
        position: "topCenter",
      }}
      showsMyLocationButton={true}
      initialRegion={{
        latitude: 20.5937,
        longitude: 78.9629,
        latitudeDelta: 45.0254,
        longitudeDelta: 15.684,
      }}
      moveOnMarkerPress={true}
    >
      {
        typeof (myCords.latitude) === "undefined" ? <></> :
          <Marker
            coordinate={{ latitude: myCords.latitude, longitude: myCords.longitude }}
          >
            <CustomMarker />
          </Marker>
      }
      {helpCords.latitude ? <Marker
        coordinate={helpCords}
        title='Help'
      >
        <CustomMarker />

      </Marker > : null}
    </MapView>
  );
}
export default Map;
