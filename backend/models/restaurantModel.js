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
        required: false
    },
    generalInformation: {
        type: String,
        required: false
    },
    bookArray: {
        type: [{ type: String }],
    }
},
    { timestamps: true }
)

// RestaurantSchema.statics.addBook = async function (req) {
//     const { bookArray } = req.body;
    
// }

module.exports = mongoose.model('Restaurant', RestaurantSchema);