//imports
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async(req, res, next) => {//if response is not used you may use "_"
    try {
        //if the req.cookies to access the cookies like accessToken
        //but it may be absent and user may be sending the data as the custom header from mobile app
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        // to get the token only we replace Bearer to be "" an empty string

        // console.log(token);
        if (!token) {
            throw new ApiError(401, "Unauthorized request")
        }
    
        
        // to get the info from the cookies or headers decode them with jwt

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    //getting the value of id from the from the decoded token _id then use that to find the user in mongodb then create a user object of selected properties via string argument to select function the - means to exclude from selection
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if (!user) {
            //if token did not work give the http  401 Unauthorized response status code which indicates that the client request has not been completed because it lacks valid authentication credentials for the requested resource.
            throw new ApiError(401, "Invalid Access Token")
        }
    
        req.user = user;
        next()//so that the callback to various functions may be done
    } catch (error) {//the http  401 Unauthorized response status code which indicates that the client request has not been completed because it lacks valid authentication credentials for the requested resource.
        throw new ApiError(401, error?.message || "Invalid access token")
    }
    
})