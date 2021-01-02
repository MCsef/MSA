const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    roomPrice: {
        type: Number,
        required: true
    },
    clientPrice: {
        type: Number,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    observation: {
        type: String,
        required: false
    }
});

mongoose.model("room", RoomSchema);