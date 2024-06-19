import mongoose, {Schema} from "mongoose"
//no need to import user schema data model seperately
const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, //subscribing
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId, //whom get subscribed
        ref: "User"
    }
}, {timestamps: true})



export const Subscription = mongoose.model("Subscription", subscriptionSchema)