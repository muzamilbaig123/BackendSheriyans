import multer from "multer";

// memorystorage for server save
const storage = multer.memoryStorage() 

// disk storage for local save 
/*
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "_" + file.originalname)

    }
})
*/

export const uploads = multer({ storage })