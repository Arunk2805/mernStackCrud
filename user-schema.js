import mongoose from "mongoose";



const userSchema = mongoose.Schema({
  email:String,
  password:String
})

 const user = mongoose.model("users",userSchema)
 export default user
 