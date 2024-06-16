const asyncHandler = (requestHandler) => {
    return (req, res, next) => {//well the parameters usually are (err, req, res, next)
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
        //promis is 1 resolved 2 rejected or catch(error) or failed
    }
}


export { asyncHandler } ;// import using import {asyncHandler} from "./utils/asyncHandler"




// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {//error standardisation using the api error of node js
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }