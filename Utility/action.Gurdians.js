import axios from 'axios'

export const getGurdiansList = async () => {
  console.log("function called")
  try {
    return await axios.get('http://192.168.29.59:2000/guardians')
  } catch (error) {
    console.log(error)
  }
}