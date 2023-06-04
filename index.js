import express from "express"
import {Connection}from './database/db.js'
import dotenv from 'dotenv'
import cors from 'cors'
import Routes from './Routes/route.js'
import bodyParser from "body-parser"




const app = express();
app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use("/",Routes)





dotenv.config();
const userName = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD
Connection(userName,password)


const PORT = 6060
app.listen(PORT ,()=>{
  console.log("server running successfully !")
})