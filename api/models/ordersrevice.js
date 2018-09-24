const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,

    note: {
        type: String,
        required: true
    },
    roomNo: {
        type: Number,
        require: true
    },
    status: {
        type: String,
        enum: ["Pindding", "Accepted", "Rejected"],
        default: "Pindding"
    },

    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'service',
    },
    userServicesOrded: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    creationDate: {
        type: Date,
        default: new Date
    }

});

module.exports = mongoose.model('order', orderSchema);