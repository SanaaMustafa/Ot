const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,

    number: {
        type: String,

    },
    price: {
        type: Number
    },
    desc: {
        type: String,
    },


    imgs: [{ // url 
        type: String,
        default: "https://icon-icons.com/icons2/582/PNG/512/worker_icon-icons.com_55029.png"
    }],


    creationDate: {
        type: Date,
        default: new Date
    }

});

module.exports = mongoose.model('room', roomSchema);