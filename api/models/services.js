const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,

    name: {
        type: String,
        required: true
    },
    desc:{
        type:String,
    },

    img: { // url 
        type: String,
        default: "https://icon-icons.com/icons2/582/PNG/512/worker_icon-icons.com_55029.png"
    },


    creationDate: {
        type: Date,
        default: new Date
    }

});

module.exports = mongoose.model('service', serviceSchema);