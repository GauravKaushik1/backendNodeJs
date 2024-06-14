// import statements
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// create the app for the usage through out the project
const app = express();

// limit the size of paylaod accepted by the site
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());


export { app };// this is to be imported using the import { app }