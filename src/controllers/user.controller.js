//import wrapper functions form utilities
import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
//import the data model schema
import { User} from "../models/user.model.js";
//enable the upload to  internet
import {uploadOnCloudinary} from "../utils/cloudinary.js";
//import the 
import jwt from "jsonwebtoken";
import mongoose from "mongoose";


const generateAccessAndRefereshTokens = async(userId) =>{
    try {
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        return {accessToken, refreshToken};


    } catch (error) {
        //http 500: Internal Server Error server error response code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}

const registerUser = asyncHandler( async (req, res) => {
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res

//take data from form and json using request.body and url data is not taken here
    const {fullName, email, username, password } = req.body
    //console.log("email: ", email);

    //validations of input and appropriate status giving using apierror. http status code 400 : Bad request
    if (
        [fullName, email, username, password].some((field) => field?.trim() === "")
        || !email.include('@') 
        || !email.include('.')
    ) {//js map or some the array function to check if any of the field is empty on trim execute this one
        //validations usually have a separate file
        throw new ApiError(400, "All fields are required")
    }
    //string method include() that can check if the email field has @ symbol or not

// use mongoose schema of user
    const existedUser = await User.findOne({
        $or: [{ username }, { email }]
    })// you may use the $or $and ,etc. operator usage to check array in functions like findOne. FindOne will find the first one that it can find and stop or return.
    //find may also be used

    if (existedUser) {
        //409 status code is used to indicate a conflict with the current state of a resource, such as when trying to create or update a resource that already exists or has conflicting information.
        throw new ApiError(409, "User with email or username already exists")
    }

    //access to req.files coz of middleware multer
    //console.log(req.files);
    //first property has path or original name 
    const avatarLocalPath = req.files?.avatar[0]?.path;
    //const coverImageLocalPath = req.files?.coverImage[0]?.path;

    let coverImageLocalPath;//This field is not required and may not exist so let is used
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {//isArray checks if arrray is proper or not
        coverImageLocalPath = req.files.coverImage[0].path
    }
    

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required")
    }
//to upload on the cloudinary
    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)
//wait till uploading is done

    if (!avatar) {
        throw new ApiError(400, "Avatar file is required")
    }
   
//db entry using user as a schema
    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",//coverImag may not exist or not uploaded if exist give coverImage.url else "" empty or null
        email, 
        password,
        username: username.toLowerCase()
    })

    //get the id that was created of user
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    ) //pass fields that are needed to be selected in select method on finding the user
    //to make some fields to not get selected we use - symbol in front of them
    // const createdUser = await User.findById(user._id).select(
    //     "username email fullName avatar coverImage watchHistory timestamps"
    // )
    
    if (!createdUser) {
        //check if user was created or not and send http status code 500: Internal Server Error if not created
        throw new ApiError(500, "Something went wrong : while registering the user : internal server error")
    }

//sending the createdUser object to the frontend to show the preview and http status code 201: Created
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully") //http response code 200: Ok
    ) //use Api response utility wrapper

} )

const loginUser = asyncHandler(async (req, res) =>{
    // req body -> data
    // username or email
    //find the user
    //password check
    //access and referesh token
    //send cookie

    const {email, username, password} = req.body
    console.log(email);
//send the http status response 400 : Bad request if username and email are both not entered by the user
    // if (!username && !email) {
    //     throw new ApiError(400, "username or email is required")
    // }
    
    // Here is an alternative of above code based on logic discussed in video:
    if (!(username || email)) {
        throw new ApiError(400, "username or email is required")
        
    }

    //here we made an instance of mongodb to use our functions from and to use the mongodb functions we must use its schema that was exported/imported
    const user = await User.findOne({
        $or: [{username}, {email}]
    }) //use the $ to use mongodb operators and find either or the username or email is found
    //findOne will find the first one that it may find and output that

    // if user is not found in the db then show the  HTTP 404 Not Found response status code which indicates that the server cannot find the requested resource.
    if (!user) {
        throw new ApiError(404, "User does not exist")
    }

   const isPasswordValid = await user.isPasswordCorrect(password)
//user is an instance so the lower case for user made custom functions and not through mongoose object so no builtin functions used



//if the password mismatch then send the http 401 Unauthorized response status code indicates that the client request has not been completed because it lacks valid authentication credentials for the requested resource.
   if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials")
    }

   const {accessToken, refreshToken} = await generateAccessAndRefereshTokens(user._id)
//an alternative would be to update the token of the object previously madee as the values are in the db but the object does not if the db operations are costly we should update the object but it is not costly i guess for now so do the below and make the object to send as response

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {//cookies not modifiable by the front end and only server may modify them
        httpOnly: true,
        secure: true
    }

    //HTTP 200 OK success status response code indicates that the request has succeeded
    //one may use as many cookies as they may need
    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200, 
            {
                user: loggedInUser, accessToken, refreshToken //in case user wants to store these into the cookies like local storage or to store in mobile applications
            },
            "User logged In Successfully"
        )
    )

})
//use custom middleware to logout as the user id is to be found
const logoutUser = asyncHandler(async(req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {//mongodb operator
                refreshToken: 1 // this removes the field from document
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }


// HTTP 200 OK success status response code indicates that the request has succeeded
    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"))
})

const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    //http 401 Unauthorized response status code indicates that the client request has not been completed because it lacks valid authentication credentials for the requested resource.
    if (!incomingRefreshToken) {
        throw new ApiError(401, "unauthorized request")
    }

    try {//verify the token using jwt(JSON Web Token)
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )
    //find by id using the token
        const user = await User.findById(decodedToken?._id)
    //if user not found from the decoded token and getting the id
        if (!user) {
            throw new ApiError(401, "Invalid refresh token")
        }
    // match the token from request and the refresh token present on the server
        if (incomingRefreshToken !== user?.refreshToken) {
            throw new ApiError(401, "Refresh token is expired or used")
            //HTTP 401: Unauthorized response status code indicates that the client request has not been completed because it lacks valid authentication credentials for the requested resource.
        }
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
        const {accessToken, newRefreshToken} = await generateAccessAndRefereshTokens(user._id)
    
        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
            new ApiResponse(
                200, 
                {accessToken, refreshToken: newRefreshToken},
                "Access token refreshed"
            )
        )// HTTP 200 OK success status response code indicates that the request has succeeded. A 200 response is cacheable by default.
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid refresh token")//HTTP 401: Unauthorized response status code indicates that the client request has not been completed because it lacks valid authentication credentials for the requested resource.
    }

})

const changeCurrentPassword = asyncHandler(async(req, res) => {//get data from req.body
    const {oldPassword, newPassword} = req.body
    
    /*
    // confirm password may need to be match the new password but is mostly handled in frontend
    // const {oldPassword, newPassword,confPassword} = req.body
    // if(!(newPassword === confPassword)){
    //     throw error
    // }
    */

    const user = await User.findById(req.user?._id)
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)

    if (!isPasswordCorrect) {
        throw new ApiError(400, "Invalid old password")
    }//HTTP 400: Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error (for example, malformed request syntax, invalid request message framing, or deceptive request routing).

    user.password = newPassword
    await user.save({validateBeforeSave: false})
    //save without running any other validation coz of cost

    return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully"))//
})


const getCurrentUser = asyncHandler(async(req, res) => {
    return res
    .status(200)
    .json(new ApiResponse(
        200,
        req.user,
        "User fetched successfully"
    ))//HTTP 200 OK success status response code indicates that the request has succeeded
})

const updateAccountDetails = asyncHandler(async(req, res) => {
    const {fullName, email} = req.body
//fileupdate to be different instead of giving a user object to avoid network congession because of text value increasing size of payload
    if (!fullName || !email) {
        throw new ApiError(400, "All fields are required")
        //http status code: 400 bad request
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                fullName,// or use fullName:fulName
                email// or use email:email
            }
        },
        {new: true}
        
    ).select("-password")

    return res
    .status(200)
    .json(new ApiResponse(200, user, "Account details updated successfully"))
});

const updateUserAvatar = asyncHandler(async(req, res) => {
    const avatarLocalPath = req.file?.path
//request.file for single file
    if (!avatarLocalPath) {// 400:Bad Request
        throw new ApiError(400, "Avatar file is missing")
    }

    //TODO: delete old image - assignment

    const avatar = await uploadOnCloudinary(avatarLocalPath)

    if (!avatar.url) {// 400:Bad Request
        throw new ApiError(400, "Error while uploading on avatar")
        
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set:{
                avatar: avatar.url
            }
        },
        {new: true}
    ).select("-password")

    return res
    .status(200)
    .json(
        new ApiResponse(200, user, "Avatar image updated successfully")
    )
})

const updateUserCoverImage = asyncHandler(async(req, res) => {
    const coverImageLocalPath = req.file?.path

    if (!coverImageLocalPath) {
        throw new ApiError(400, "Cover image file is missing")
    }

    //TODO: delete old image - assignment


    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if (!coverImage.url) {
        throw new ApiError(400, "Error while uploading on avatar")
        
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set:{
                coverImage: coverImage.url
            }
        },
        {new: true}
    ).select("-password")

    return res
    .status(200)
    .json(
        new ApiResponse(200, user, "Cover image updated successfully")
    )
})


const getUserChannelProfile = asyncHandler(async(req, res) => {
    const {username} = req.params//get username from the url of channel

    if (!username?.trim()) {
        //HTTP 400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error (for example, malformed request syntax, invalid request message framing, or deceptive request routing).
        throw new ApiError(400, "username is missing")
    }

    //As per hitesh chaudhary from playlist chai aur javascript backend youtube channel chai aur code 
    //aggregation querries give you arrays in return
    const channel = await User.aggregate([
        {
            $match: {//will find document from the documents documents filtered to have one document
                username: username?.toLowerCase()//get the username 
            }
        },
        {
            $lookup: {
                from: "subscriptions",//model name changes to lowercase and an s is appended to it
                localField: "_id",
                foreignField: "channel",
                as: "subscribers"
            }
        },
        {
            $lookup: {
                from: "subscriptions",
                localField: "_id",
                foreignField: "subscriber",
                as: "subscribedTo"
            }
        },
        {
            $addFields: {
                subscribersCount: {
                    $size: "$subscribers"//calculate the number of how many use size
                },
                channelsSubscribedToCount: {
                    $size: "$subscribedTo"//count the number of subscribed To or channels
                },
                isSubscribed: {//boolean subscribed
                    $cond: {//for condition check
                        if: {$in: [req.user?._id, "$subscribers.subscriber"]},//in for going inside the array  or bjects 
                        //req.user gives the user that is logged in so req.user._id is the id of the loggedin user
                        //if currently logged in user is in the subscriber of the scbscribers of the channel recieved through the url
                        then: true,
                        else: false
                    }
                }
            }
        },
        {
            $project: {//projection to give selected data to network usage
                fullName: 1,
                username: 1,
                subscribersCount: 1,
                channelsSubscribedToCount: 1,
                isSubscribed: 1,
                avatar: 1,
                coverImage: 1,
                email: 1

            }
        }
    ])

    if (!channel?.length) {
        throw new ApiError(404, "channel does not exists")// HTTP 404 Not Found response status code indicates that the server cannot find the requested resource.
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200, channel[0], "User channel fetched successfully")//channel[0] as the details are on the
    )
})

const getWatchHistory = asyncHandler(async(req, res) => {
    const user = await User.aggregate([
        {//aggregatequerry to show a join
            $match: {
                _id: new mongoose.Types.ObjectId(req.user._id)
            }
        },
        {
            $lookup: {//to get the watchHistory documents for join
                from: "videos",
                localField: "watchHistory",
                foreignField: "_id",
                as: "watchHistory",
                pipeline: [
                    {
                        $lookup: {//owner has to be of the watched video wit connection
                            from: "users",
                            localField: "owner",
                            foreignField: "_id",
                            as: "owner",
                            pipeline: [
                                {
                                    $project: {
                                        fullName: 1,
                                        username: 1,
                                        avatar: 1
                                    }
                                }
                            ]
                        }
                    },
                    {
                        $addFields:{
                            owner:{//sameName to override previous one
                                $first: "$owner"//so that array first element is given as it was given by the value [0]
                            }
                        }
                    }
                ]
            }
        }
    ])

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            user[0].watchHistory,//send only the first property value
            "Watch history fetched successfully"
        )
    )
})


export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails,
    updateUserAvatar,
    updateUserCoverImage,
    getUserChannelProfile,
    getWatchHistory
}