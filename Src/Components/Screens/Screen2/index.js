import React, { useEffect, useContext } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { View, Image } from 'react-native'
import marker from '../../../assets/img/marker.png'
import { StateContext } from '../../../Utils/StateProvider';
const Map = ({ width }) => {
    const State = useContext(StateContext);
    const { mapRef, myCords } = State;
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
                {/* <Image style={{ top: 7, width: 63, height: 62, alignSelf: "center", borderRadius: 50 }} source={require("../../../assets/kanha.jpg")} /> */}
            </View>
        </View>
    );
    useEffect(() => {
        const newCamera = {
            center: { latitude: myCords.latitude, longitude: myCords.longitude },
            zoom: 15,
            heading: 0,
            pitch: 0,
            altitude: 5
        }
        setTimeout(() => {
            mapRef.current.animateCamera(newCamera, { duration: 500 });
        }, 3000);
    }, [mapRef.current])
    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            ref={(map) => mapRef.current = map}
            style={{
                width: width,
                height: "100%",
            }}
            // mapType="standard"
            mapTypeControlOptions={{
                style: "",
                position: "topCenter",
            }}
            showsUserLocation={true}
            showsMyLocationButton={true}
            initialRegion={{
                latitude: 20.5937,
                longitude: 78.9629,
                latitudeDelta: 45.0254,
                longitudeDelta: 15.684,
            }}
            // onLayout={() => {
            //     mapRef.current.animateCamera({
            //         center: {
            //             latitude: myCords.latitude,
            //             longitude: myCords.longitude,
            //             latitudeDelta: 0.001663,
            //             longitudeDelta: 0.002001,
            //         },
            //         heading: 0,
            //         pitch: 90,
            //     });
            // }}
            moveOnMarkerPress={true}
            onMapReady={() => {
                // mapRef.current.fitToCoordinates(helpCords.map((helpCord) => {
                //     return { latitude: helpCord.latitude, longitude: helpCord.longitude }
                // }))
            }}
        >
            {/* <Marker
                coordinate={{ latitude: myCords.latitude, longitude: myCords.longitude }}
            >
            </Marker> */}

        </MapView>
    );
}
export default Map;






