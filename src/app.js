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
app.use(cookieParser());//enables the cookie as the response and request of the server

//import routes it is usually done after import of middleware
import userRouter from "./routes/user.routes.js";
import healthcheckRouter from "./routes/healthcheck.routes.js"
import tweetRouter from "./routes/tweet.routes.js"
import subscriptionRouter from "./routes/subscription.routes.js"
import videoRouter from "./routes/video.routes.js"
import commentRouter from "./routes/comment.routes.js"
import likeRouter from "./routes/like.routes.js"
import playlistRouter from "./routes/playlist.routes.js"
import dashboardRouter from "./routes/dashboard.routes.js"

//routes declared not the localhost to be used. In addition we have the segragation for the export of router we must use middleware to switch the control to middleware . get and other methods will be residing in the routers and not the app.js
// app.get() //it is to reside in router files not here
app.use("/api/v1/healthcheck", healthcheckRouter)
app.use("/api/v1/users", userRouter)
app.use("/api/v1/tweets", tweetRouter)
app.use("/api/v1/subscriptions", subscriptionRouter)
app.use("/api/v1/videos", videoRouter)
app.use("/api/v1/comments", commentRouter)
app.use("/api/v1/likes", likeRouter)
app.use("/api/v1/playlist", playlistRouter)
app.use("/api/v1/dashboard", dashboardRouter)

// http://host-name:port/api/v1/users/register

export { app };// this is to be imported using the import { app }