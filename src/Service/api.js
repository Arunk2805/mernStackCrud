import axios from 'axios'


const URL = "http://localhost:6060"

export const addUser = async(usr)=>{
  try {
    return await axios.post(`${URL}/add`,usr)
  } catch (error) {
    console.log("error while calling addUser Api",error)
  }
}
export const getUsers =async ()=>{
  try{
    return await axios.get(`${URL}/all`)
  }catch (err){
    console.log("error while calling getUsers")
  }
}

export const deleteUser = async (id)=>{
  try {
    return await axios.delete(`${URL}/${id}`)
  } catch (error) {
    console.log("error while calling deleteUser")
  }
}

export const getUser = async(id)=>{
  try {
    return await axios.get(`${URL}/edit/${id}`)
  } catch (error) {
    console.log("error while calling getUser !")
  }
}
export const upDateUser = async(user,id)=>{
  try {
    return await axios.put(`${URL}/edit/${id}`,user)
  } catch (error) {
    console.log("error while calling upDateUser")
  }
}