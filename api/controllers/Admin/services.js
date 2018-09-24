const mongoose = require("mongoose");
const serviceModel = require("../../models/services");
const toImgUrl = require('../../utils/index')

//create one 

exports.createService = async (req, res, next) => {
    if (!req.file)
        return res.status(422).json({ message: "Image is required" });

    req.body.img = await toImgUrl.toImgUrl(req.file);

    let createdObj = await serviceModel.create(req.body);
    return res.status(200).json(returnedObject);
};


exports.getAll = async (req, res, next) => {
    let details = await serviceModel.find();
    return res.status(200).json(details);
};

//update one

exports.updateService = async (req, res, next) => {
    let id = req.params.serId;

    let serviceObj = await serviceModel.findById(id);
    if (!serviceObj)
        return res.status(404).end();

    if (req.file)
        req.body.img = await toImgUrl.toImgUrl(req.file);

    try {
        let newDoc = await serviceModel.findByIdAndUpdate({ _id: id }, req.body, { new: true });

        return res.status(200).json(newDoc)

    } catch (error) {
        return res.status(500).json({
            "message": "updating process not completed",
            error: err
        });
    }


};





