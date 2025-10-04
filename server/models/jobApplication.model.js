// Basically here we made the model for user to applying the job 
import mongoose from "mongoose"
const JobApplicationSchema = new mongoose.Schema({
    userId : {
        type : String,
        ref:"User",
        required:true
    },
    companyId : {
        type : mongoose.Schema.Types.ObjectId,
        ref:"Company",
        required:true
    },
    jobId : {
        type : mongoose.Schema.Types.ObjectId,
        ref:"PostJob",
        required:true
    },
    status : {
        type : String,
        default:"pending"
    },
    date : {
        type : Number,
        required:true
    }
})
const JobApplication = mongoose.model("JobApplication",JobApplicationSchema)
export default JobApplication