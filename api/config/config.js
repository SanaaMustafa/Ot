module.exports=function ConnectMongoDB(){
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://ot:ot1234@ds231460.mlab.com:31460/ot')
}

