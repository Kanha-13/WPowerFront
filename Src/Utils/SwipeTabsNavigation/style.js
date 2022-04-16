import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get("window")
export const style = {
    container: {
        width: width,
        height: height,
        backgroundColor: "#000000"
    }
}