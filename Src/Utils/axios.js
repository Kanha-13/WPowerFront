import axios from 'axios'

const instance = axios.create({
  baseURL: "http://192.168.29.59:1312",
})

export default instance;