const mongoose = require("mongoose");

const Customer = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },

    age: {
        type: Number,
        require: true
    },

    address: {
        type: String,
        require: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Customer", Customer);