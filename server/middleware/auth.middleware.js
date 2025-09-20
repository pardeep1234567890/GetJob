import jwt from "jsonwebtoken"
import { messageInRaw } from "svix"
import Company from "../models/Company.model.js"

export const verifyJwt = async (req, res, next) => {
    const token = req.headers.token
    if (!token) {
        res.json({ success: false, message: "Unauthorized access" })
    }
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        req.company = await Company.findById(decodedToken.id).select("-password")
        next()

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}