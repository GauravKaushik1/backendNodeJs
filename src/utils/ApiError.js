// class inheritence from the node js built in error handlers to overwrite and customize them
class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",//most unhelpful error message
        errors = [],//errors passing
        stack = ""//error stack
    ){
        super(message);//call to baseclass constructor like the Error class in this case
        this.statusCode = statusCode;
        this.data = null;//what is in this field normally.. do tell me i am yet to find it.
        // The data field in such an error class is commonly used to store additional information about the error context or the response data related to the API call that resulted in the error
        this.message = message;
        this.success = false;
        this.errors = errors;

        if (stack) {
            this.stack = stack;
        } else{
            Error.captureStackTrace(this, this.constructor);
        }

    }
}

export {ApiError}//import using the syntax import {ApiError} from "./utils/ApiError.js"