const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true
    },
    generalInformation: {
        type: String,
        required: false
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('Restaurant', RestaurantSchema);