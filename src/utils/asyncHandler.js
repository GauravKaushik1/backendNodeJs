const asyncHandler = (requestHandler) => {
    return (req, res, next) => {//well the parameters usually are (err, req, res, next)
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    }
}


export { asyncHandler } ;// import using import {asyncHandler} from "./utils/asyncHandler"




// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }