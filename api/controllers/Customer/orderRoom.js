const mongoose = require("mongoose");
const OrderRoomModel = require("../../models/orderRoom");
const toImgUrl = require('../utils/index')

//create one 

exports.createOne = async (req, res, next) => {
    req.body.userRoomorder = req.userData.userId;
    req.body.room = req.params.roomId;
    let createdObj = await OrderRoomModel.create(req.body);
    return res.status(200).json(returnedObject);
};


exports.getAllForOneUser = async (req, res, next) => {
    let details = await OrderRoomModel.find({ userRoomorder: req.userData.userId });
    return res.status(200).json(details);
};


exports.updateOne = async (req, res, next) => {
    let id = req.params.ordId;

    let Obj = await OrderRoomModel.findById(id);
    if (!Obj)
        return res.status(404).end();
    if (Obj.status != 'Pindding')
        return res.status(403).json({ message: 'you cant update this order' });

    try {
        let newDoc = await OrderRoomModel.findByIdAndUpdate({ _id: id }, req.body, { new: true });

        return res.status(200).json(newDoc)

    } catch (error) {
        return res.status(500).json({
            "message": "updating process not completed",
            error: err
        });
    }


};



