import React, { useEffect, useContext, useRef } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { View, Image, Text, FlatList } from 'react-native'
import marker from '../../../assets/img/marker.png'
import { StateContext } from '../../../Utils/StateProvider';
import Slider from './Slider';
import RequestCard from './RequestCard';
const Map = ({ width }) => {
    const State = useContext(StateContext);
    const { mapRef, myCords, allHelpRequests } = State;
    const markersRef = useRef([])
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
        // console.log("In screen 2", allHelpRequests)
    }, [allHelpRequests])


    useEffect(() => {
        const newCamera = {
            center: { latitude: myCords.latitude, longitude: myCords.longitude },
            zoom: 15,
            heading: 0,
            pitch: 0,
            altitude: 5
        }
        setTimeout(() => {
            try {
                mapRef.current.animateCamera(newCamera, { duration: 500 });
            } catch (error) {
                console.log(error)
            }
        }, 3000);
    }, [mapRef.current])
    const onRequestCardClick = (index) => {
        markerPressed(markersRef.current[index].props.coordinate)
    }
    const markerPressed = (cords) => {
        mapRef?.current?.getCamera().then(camera => {
            camera.zoom += 10
            camera.center = cords
            mapRef?.current?.animateCamera(camera)
        })
    }
    const renderItem = ({ item, index }) => <RequestCard index={index} data={allHelpRequests[item]} onClick={onRequestCardClick} />

    return (
        <>
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
                showsTraffic={true}
                showsCompass={true}
                showsMyLocationButton={true}
                initialRegion={{
                    latitude: 20.5937,
                    longitude: 78.9629,
                    latitudeDelta: 45.0254,
                    longitudeDelta: 15.684,
                }}
                moveOnMarkerPress={true}
                onMapReady={() => { }}
            >
                {
                    Object.keys(allHelpRequests).map((key, index) => <Marker key={index} title='Help me!' description='I am in big trubble please help me' onPress={() => {
                        markerPressed(markersRef.current[index].props.coordinate)
                    }} ref={(marker) => markersRef.current[index] = marker}
                        coordinate={{ latitude: allHelpRequests[key].cords.latitude, longitude: allHelpRequests[key].cords.longitude }}
                    >
                    </Marker>)
                }
            </MapView>
            <Slider >
                <Text style={{ color: "#000000", marginBottom: 10, fontSize: 20, fontWeight: "bold" }} >List of people need your help</Text>
                <FlatList
                    data={Object.keys(allHelpRequests)}
                    keyExtractor={data => data.phoneNumber}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                />
            </Slider>
        </>
    );
}
export default Map;






