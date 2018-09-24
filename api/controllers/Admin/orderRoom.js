const mongoose = require("mongoose");
const OrderRoomModel = require("../../models/orderRoom");


exports.getAll = async (req, res, next) => {
    let Doc = await OrderRoomModel.find()
        .populate('room')
        .populate('userRoomorder');

    return res.status(200).json(Doc);
};

exports.getOne = async (req, res, next) => {
    let id = req.params.ordId;
    let Doc = await OrderRoomModel.findById(id)
        .populate('room')
        .populate('userRoomorder');
    if (!Doc)
        return res.status(404).end();

    return res.status(200).json(Doc);
};

exports.updateAccept = async (req, res, next) => {
    let id = req.params.ordId;

    let roomObj = await OrderRoomModel.findById(id)
        .populate('room')
        .populate('userRoomorder');
    if (!roomObj)
        return res.status(404).end();


    try {
        roomObj.status = 'Accepted'
        roomObj.save();
        return res.status(200).json(roomObj);

    } catch (error) {
        return res.status(500).json({
            "message": "updating process not completed",
            error: err
        });
    }


};

exports.updatereject = async (req, res, next) => {
    let id = req.params.ordId;

    let roomObj = await OrderRoomModel.findById(id)
        .populate('room')
        .populate('userRoomorder');

    if (!roomObj)
        return res.status(404).end();


    try {
        roomObj.status = 'Rejected'
        roomObj.save();
        return res.status(200).json(roomObj);

    } catch (error) {
        return res.status(500).json({
            "message": "updating process not completed",
            error: err
        });
    }


};



