import "./config/instrument.js"
import express from "express"
import dotenv from "dotenv/config"
import cors from "cors"
import connectDB from "./config/db.js"
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from "./controllers/webhooks.js"

// Initialize Express
const app = express()

//Connect to database 
await connectDB();

//Initialize the Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.get("/",(req,res)=>{
    res.send("API is running")
 });
 app.get("/debug-sentry", function mainHandler(req,res){
    throw new Error("My first sentry error!");
 });
 app.post("/webhooks",clerkWebhooks)

// PORT 
const PORT = process.env.PORT || 3000

Sentry.setupExpressErrorHandler(app);

app.listen(PORT,()=>{
    console.log(`The port is running on ${PORT}`)
})