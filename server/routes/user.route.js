import { Router } from "express";
import {upload} from "../config/multer.js"
import { applyForJobs, getUserData, getUserJobApplications, updateUserResume } from "../controllers/user.controller.js";

const router = Router()

// get user data 
router.get("/user",getUserData)

//apply for a job 
router.post("/apply",applyForJobs)

//get applied job data 
router.get("/applications",getUserJobApplications)

//update user profile (resume)
router.post("/update-resume",upload.single("resume"),updateUserResume)

export default router