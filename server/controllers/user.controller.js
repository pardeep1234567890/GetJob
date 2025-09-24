import User from "../models/User.model.js"
import JobApplication from "../models/jobApplication.model.js"
import { PostJob } from "../models/postJob.model.js"
import { v2 as cloudinary } from "cloudinary"

// Get user data 
export const getUserData = async (req, res) => {
    const userId = req.auth.userId

    try {
        const user = await User.findById(userId)
        if (!user) {
            return res.json({ success: false, message: "user not found" })
        }
        res.json({ success: true, user })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }

}

//Apply for job
export const applyForJobs = async (req, res) => {
    const { jobId } = req.body
    const userId = req.auth.userId
    try {
        const isAlreadyApplied = await JobApplication.find({ jobId, userId })

        if (isAlreadyApplied.length > 0) {
            return res.json({ success: false, message: "Already applied" })
        }
        const jobData = await PostJob.findById(jobId)

        if (!jobData) {
            return res.json({ success: false, message: "Job Not Found" })
        }
        await JobApplication.create({
            companyId: jobData.companyId,
            userId,
            jobId,
            date: Date.now()
        })

        res.json({ success: true, message: "Applied SuccessFully" })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

//Get user applied application
export const getUserJobApplications = async (req, res) => {

    try {
        const userId = req.auth.userId
        const applications = await JobApplication.find({ userId })    // find() always expect a object Filter
            .populate("companyId", "name email image")
            .populate("jobId", "title description location category level salary")
            .exec()

        if (!applications) {
            res.json({ success: false, message: "No Job Application found" })
        }

        res.json({ success: true, applications })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }

}

//update user profile (resume)
export const updateUserResume = async (req, res) => {

    try {
        const userId = req.auth.userId

        const resumeFile = req.resumeFile
        const userData = await User.findById(userId)

        if (resumeFile) {
            const resumeUpload = await cloudinary.uploader.upload(resumeFile.path)
            userData.resume = resumeUpload.secure_url
        }
        await userData.save()
        res.json({ success: true, message: "Resume Updated" })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}