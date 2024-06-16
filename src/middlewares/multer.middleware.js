import multer from "multer";
// store to disk via this one though you may use the memory but memory is small and disk should be prefered for images and video
const storage = multer.diskStorage({
    destination: function (req, file, cb) {//file has file access to use this parameter we use multer
      cb(null, "./public/temp")// error handle , null etc as first parameter
    },
    filename: function (req, file, cb) {//cb means call-back
        //for random file unique or nano id as filenames
        /* const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)*/
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname + '-' + uniqueSuffix)
    }
  })
  
export const upload = multer({ 
    storage, //storage:storage was more appropriate but science es5 syntax when both key and value have the same name
})