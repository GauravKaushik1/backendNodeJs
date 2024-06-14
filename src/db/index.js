//import statements
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
//when export is done like export { DB_NAME }


const connectDB = async () => {//an async function coz the database access takes time and the db is located remotely or as hitesh choudhary put it the database is located at another continent
    try {// there may be various issues in a database access like the non-existence of the db to not having of a change in access related to the database(user Rights) or the network access.
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        // accessing the db uri through the .env file using the process.env object that will connect and will supply the environment variables
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        console.log(`\n this is the connectionInstance Object ${connectionInstance}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1);//to exit the process that is running the app
    }
}

export default connectDB; //export wrapper the function to connect to db use the statement : import connectDB from "./db/index.js"