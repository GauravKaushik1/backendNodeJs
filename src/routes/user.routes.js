//import statements
import { Router } from "express";
import { 
    loginUser, 
    logoutUser, 
    registerUser, 
    refreshAccessToken, 
    changeCurrentPassword, 
    getCurrentUser, 
    updateUserAvatar, 
    updateUserCoverImage, 
    getUserChannelProfile, 
    getWatchHistory, 
    updateAccountDetails
} from "../controllers/user.controller.js";
// for file handling or uploading
import {upload} from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router();//making the router

//routes making do we come to the /api/v1/users or register users the url will be becomming 
// // http://host-name:port/api/v1/users/register
router.route("/register").post(
    upload.fields([
        {
            //upload is the middleWare added here    
        /*
            *upload.single for single file upload
            *the use of array to upload all the files through a single fields 
            *use fields for the multiple fields input of files
        */
            name: "avatar",//the name of frontend field for upload
            maxCount: 1
        }, 
        {
            name: "coverImage",//the name of frontend field for upload
            maxCount: 1
        }
    ]),
    registerUser
    )

router.route("/login").post(loginUser);

//secured routes
router.route("/logout").post(verifyJWT,  logoutUser);
//it uses next() as given at the last step in middleware to execute the next parameter passed function
router.route("/refresh-token").post(refreshAccessToken);
router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router.route("/current-user").get(verifyJWT, getCurrentUser);
//use patch so that all details are not updated
router.route("/update-account").patch(verifyJWT, updateAccountDetails);

router.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar);
router.route("/cover-image").patch(verifyJWT, upload.single("coverImage"), updateUserCoverImage);

router.route("/c/:username").get(verifyJWT, getUserChannelProfile);
router.route("/history").get(verifyJWT, getWatchHistory);

export default router ;