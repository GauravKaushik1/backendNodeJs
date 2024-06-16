// require('dotenv').config({path: './env'}) //to use the other syntax(ES5) add "type": "module" in the package.json
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from './app.js';
//configure the dotenv to work with the new syntax of modules and async ones
dotenv.config({
    path: './.env'
})


connectDB()
.then(() => {
    //do this after the connection is done  or is promised
    app.listen(process.env.PORT || 8000, () => {//give the default port to choose from the env if available if not then it will use the env
        console.log(`Server is running at port : ${process.env.PORT}`);
    });
})
.catch((err) => {//error handling
    console.log("MONGO db connection failed !!! ", err);
});










/*
import express from "express";
const app = express();

// good practice to use the semicolon before iffies for cleaning purpose
// ;( async () => {})()

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/