import { Router } from "express"
import { changeJobApplicationsStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from "../controllers/company.controller.js"
import { upload } from "../config/multer.js"
import { verifyJwt } from "../middleware/auth.middleware.js"


const router = Router()

//Register a company 
router.post("/register", upload.single("image"), registerCompany)

// company Login
router.post("/login", loginCompany)

// get company data 
router.get("/company", verifyJwt, getCompanyData)

// Post a job 
router.post("/post-job", verifyJwt, postJob)

// Get applicants data of company
router.get("/applicants", verifyJwt, getCompanyJobApplicants)

// Get company Job list 
router.get("/list-jobs", verifyJwt, getCompanyPostedJobs)

// change application status  
router.post("/change-status", verifyJwt, changeJobApplicationsStatus)

// change applications visibility 
router.post("/change-visibility", verifyJwt, changeVisibility)

export default router