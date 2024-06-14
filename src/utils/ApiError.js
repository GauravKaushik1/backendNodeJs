// class inheritence from the node js built in error handlers to overwrite and customize them
class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",//most unhelpful error message
        errors = [],
        stack = ""
    ){
        super(message);
        this.statusCode = statusCode;
        this.data = null;
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