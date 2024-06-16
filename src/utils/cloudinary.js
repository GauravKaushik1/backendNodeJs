import {v2 as cloudinary} from "cloudinary";
import fs from "fs";//file system no need to install via npm is installed by default

// get config details from api keys from cloudinary
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {//give file link
//    it takes time so use the async
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        }) // we may give it publicId and name as well
        // file has been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);//public url after upload
        fs.unlinkSync(localFilePath)//remove the locally saved temporary file
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed via link is removed . when the file is deleted it is unlinked from file system
        return null;
    }
}



export {uploadOnCloudinary}