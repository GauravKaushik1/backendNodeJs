// import statements
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// create the app for the usage through out the project
const app = express();


// configuring the cors
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}));//origin may be vercil app or something whereever your frontend lie


// prepare data for reciving through url, form, json, body, json form,etc.
// configuring the middleware limit the size of paylaod accepted by the site
app.use(express.json({limit: "16kb"},));
//url encoding may make the space to be %20 or 
app.use(express.urlencoded({extended: true, limit: "16kb"}));//extended for the nested objects
app.use(express.static("public"));//images or pdf or favicon to be saved in our server
app.use(cookieParser());

export { app };// this is to be imported using the import { app }