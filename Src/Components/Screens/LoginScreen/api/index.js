import axios from '../../../../Utils/axios'

export const checkUser=async(mobileNumber)=>{
  const res= await axios.get(`/user/${mobileNumber}`)
  return res
}

export const updateUserCredential=async(userDetails)=>{
  const resp=await axios.patch('/user',userDetails)
  return resp
}