import Company from "../models/Company.model.js";
import bcrypt, { hash } from "bcrypt"
import { v2 as cloudinary } from "cloudinary";
import { generateToken } from "../utils/generateToken.js";
import { messageInRaw } from "svix";
import { Job } from "../models/postJob.js";

// Register a new company 
export const registerCompany = async (req, res) => {
    // get user details from frontend 
    // validation = it it is empty 
    // check if user already exist = username ,email 
    // create user object :- create entry in DB  
    // check for user creation
    // return response 

    try {
        const { name, email, password } = req.body;
        const imageFile = req.file;
        if (!name || !email || !password || !imageFile) {
            return res.status(400).json({ success: false, message: " Missing Details " });
        }

        // if (name === "") {
        //     return res.status(400).json({ message: " username is required " });
        // }
        // if (email === "") {
        //     return res.status(400).json({ message: " email is required " });
        // }
        // if (password === "") {
        //     return res.status(400).json({ message: " password is required " });
        // }
        const existedCompany = await Company.findOne({
            $or: [{ name }, { email }]
        })
        if (existedCompany) {
            return res.status(400).json({ success: false, message: "Company already exists" });
        }

        // hash the password using bcrypt 
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        const imageUpload = await cloudinary.uploader.upload(imageFile.path)

        const company = await Company.create({
            name,
            email,
            password: hashPassword,
            image: imageUpload.secure_url
        }
        )
        res.json({
            success: true,
            company: {
                _id: company._id,
                name: company.name,
                email: company.email,
                image: company.image,
            },
            token: generateToken(company._id)
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

// Company Login 
export const loginCompany = async (req, res) => {
    const { email, password } = req.body
    try {
        const company = await Company.findOne({ email })

        if (bcrypt.compare(password, company.password)) {
            res.json({
                success: true,
                company: {
                    _id: company._id,
                    name: company.name,
                    email: company.email,
                    image: company.image,
                },
                token: generateToken(company._id)
            })
        } else {
            res.json({
                success: false,
                message: "Invaild email or password"
            })
        }

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }

}

// Get company Data
export const getCompanyData = async (req, res) => {

}

// Post a new Job 
export const postJob = async (req, res) => {
        const {title , description , location,salary,level,category} = req.body 
        const companyId = req.company._id

        try {
            // i want to know about where to use "_id" and where "id"
            const newJob = new Job({
                title,
                description,
                location,
                salary,
                companyId,
                date:Date.now(),
                level,
                category
            })
            await newJob.save()
            res.json({success: true,newJob})

        } catch (error) {
            res.json({
            success: false,
            message: error.message
        })
        }
}

// Get company Job Applicants 
export const getCompanyJobApplicants = async (req, res) => {

}

// Get Company Posted Job 
export const getCompanyPostedJobs = async (req, res) => {

}

// Change job application status
export const changeJobApplicationsStatus = async (req, res) => {

}

// Change Job visibility 
export const changeVisibility = async (req, res) => {

}