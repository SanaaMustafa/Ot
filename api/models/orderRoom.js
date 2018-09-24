const mongoose = require('mongoose');

const roomOrderSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,

    userRoomorder: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    phone: {
        unique: true,
        type: String,
        match: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    },
    status: {
        type: String,
        enum: ["Pindding", "Accepted", "Rejected"],
        default: "Pindding"
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'room',
    },

    duration: {
        type: String,
    },

    creationDate: {
        type: Date,
        default: new Date
    }

});

module.exports = mongoose.model('roomOrder', roomOrderSchema);