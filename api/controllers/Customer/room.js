const mongoose = require("mongoose");
const RoomModel = require("../../models/room");
const toImgUrl = require('../../utils/index');




exports.getAllForUsers = async (req, res, next) => {
    let details = await RoomModel.find();
    return res.status(200).json(details);
};


exports.getOneForUsers = async (req, res, next) => {
    let id = req.params.roomId;
    let details = await RoomModel.findById(id);
    if (!details)
        return res.status(404).end();
    return res.status(200).json(details);
};



