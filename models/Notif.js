import mongoose from "mongoose";

const Notif = mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    to:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
});



export default mongoose.model('Notifs', Notif)