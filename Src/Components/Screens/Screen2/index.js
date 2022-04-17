import React, { useEffect } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
const Map = ({ myCords, mapRef, width }) => {
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
            //   animateCamera={
            //     {
            //       center: {
            //         latitude: 3.0256,
            //         longitude: 3.0256
            //       }, zoom: 200
            //     }, 5000
            //   }
            style={{
                width: width,
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
            onMapReady={() => {
                // mapRef.current.fitToCoordinates(helpCords.map((helpCord) => {
                //     return { latitude: helpCord.latitude, longitude: helpCord.longitude }
                // }))
            }}
        >
            <Marker
                coordinate={{ latitude: myCords.latitude, longitude: myCords.longitude }}
            >
            </Marker>

        </MapView>
    );
}
export default Map;