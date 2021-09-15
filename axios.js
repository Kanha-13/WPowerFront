import axios from 'react-native-axios'

const instance = axios.create({
  baseURL: 'http://localhost:1312/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});
