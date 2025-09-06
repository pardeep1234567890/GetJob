import express from "express"
import dotenv from "dotenv/config"
import cors from "cors"

// Initialize Express
const app = express()

//Initialize the Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.get("/",(req,res)=>{
    res.send("API is running")
 });

// PORT 
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`THe port is running on ${PORT}`)
})