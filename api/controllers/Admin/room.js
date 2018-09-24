const mongoose = require("mongoose");
const RoomModel = require("../../models/room");
const toImgUrl = require('../../utils/index');



exports.createRoom = async (req, res, next) => {

    if (req.files.length == 0)
        return res.status(422).json({ message: 'images is required' });

    req.body.imgs = []
    try {
        for (let i = 0; i < req.files.length; i++) {
            req.body.imgs.push(await toImgUrl.toImgUrl(req.files[i]));
        }
    } catch (err) {
        next(err)
    }

    let createdObj = await RoomModel.create(req.body);
    return res.status(200).json(returnedObject);
};



//update one

exports.updateRoom = async (req, res, next) => {
    let id = req.params.roomId;

    let RoomObj = await RoomModel.findById(id);
    if (!RoomObj)
        return res.status(404).end();

        if (req.files.length != 0)
        return res.status(422).json({ message: 'images is required' });

    req.body.imgs = []
    try {
        for (let i = 0; i < req.files.length; i++) {
            req.body.imgs.push(await toImgUrl.toImgUrl(req.files[i]));
        }
    } catch (err) {
        next(err)
    }

    try {
        let newDoc = await RoomModel.findByIdAndUpdate({ _id: id }, req.body, { new: true });

        return res.status(200).json(newDoc)

    } catch (error) {
        return res.status(500).json({
            "message": "updating process not completed",
            error: err
        });
    }


};



