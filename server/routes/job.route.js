import { Router } from "express"
import { getJobById, getJobs } from "../controllers/job.controller.js"

const router = Router()

//Route to get all jobs 
router.get("/", getJobs)

//Route to get single job by id 
router.get("/:id", getJobById)
export default router