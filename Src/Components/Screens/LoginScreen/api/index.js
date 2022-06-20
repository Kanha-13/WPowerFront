import axios from '../../../../Utils/axios'

export const checkUser=async(mobileNumber)=>{
  const res= await axios.get(`/user/${mobileNumber}`)
  return res
}