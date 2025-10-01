import { PostJob } from "../models/postJob.model.js"

// Get all jobs
//  Here we show those jobs that are posted by the company's
export const getJobs = async (req, res) => {
    try {
        const jobs = await PostJob.find({ visible: true })
            .populate({ path: "companyId", select: "-password" }) //With populate, it replaces that ID with the actual company document data

        res.json({ success: true, jobs })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

// get a single job by id 
export const getJobById = async (req, res) => {
    try {
        const { id } = req.params
        const job = await PostJob.findById(id)
            .populate({ path: "companyId", select: "-password" })
        if (!job) {
            res.json({ success: false, message: "Job not found" })
        }
        res.json({ success: true, job })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}