import mongooose from "mongoose"

// Function to connect to the mongoDB database
const connectDB = async ()=>{
    mongooose.connection.on("connected",()=>console.log("Database Connected"))
    await mongooose.connect(`${process.env.MONGODB_URI}/GetJob`)
}
export default connectDB;
