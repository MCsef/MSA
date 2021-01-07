const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date:{
        type: String,
        required: true
    },
    hour:{
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    numberOfPeople: {
        type: Number,
        required: true
    }
});

mongoose.model("booking", BookingSchema);