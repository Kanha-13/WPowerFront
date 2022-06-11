import axios from "axios"
import { here_apikey } from "../../../apikey"
export const reverseGeoCoding = async (cords) => {
  const res = await axios.get(`https://revgeocode.search.hereapi.com/v1/revgeocode?apiKey=${here_apikey}&at=${cords.latitude},${cords.longitude}&lang=en-US`)
  return res.data.items[0].address
}