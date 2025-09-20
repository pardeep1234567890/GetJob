import multer from "multer"

// config the storage 
const storage = multer.diskStorage({})
export const upload = multer({storage})