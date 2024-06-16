// import statements
import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt.js";

//bcrypt js
// bcrypt.config({
//     paths: { "bcrypt": "/path/to/bcrypt.js" }
// });
bcrypt.config({
    paths:"/path/to/bcrypt.js"
});//use the above syntax if errors arise

// creating the js object to serve as the reference model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true, 
            unique: true,
            lowercase: true,
            trim: true, 
            index: true //added to enable fast searching
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true, 
        },
        fullName: {
            type: String,
            required: true,
            trim: true, 
            index: true//added to enable fast searching
        },
        avatar: {
            type: String, // cloudinary url
            required: true,
        },
        coverImage: {
            type: String, // cloudinary url
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,//password to be encrypted but matching is a chellenge
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }

    },
    {
        timestamps: true// adds the created at and updated at attributes
    }
);

// do before the save event it is like an event listner
userSchema.pre("save", async function (next) {// this concept is not present in arrow functions and context ia not known by the arrow function so using this format
    //middleware must have access to next
    if(!this.isModified("password")) {//to use the encryption upon save if the password was modified else skip it
        //so that on upload of files it is not triggred to encrypt the already encrypted password again
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);//hash what and how many rounds
    next();
});


// adding the methods to the schema reference object
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password);//to compare if the hashed password is the same as the user entered password being hashed right now
}

userSchema.methods.generateAccessToken = function(){//it is usually speedy so async was not needed
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,

        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema);//the export of user Schema as the User and will be stored in mongoose as Users