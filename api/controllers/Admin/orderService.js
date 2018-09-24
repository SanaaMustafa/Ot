const mongoose = require("mongoose");
const OrderServiceModel = require("../../models/ordersrevice");


exports.getAll = async (req, res, next) => {
    let Doc = await OrderServiceModel.find()
        .populate('service')
        .populate('userServicesOrded');

    return res.status(200).json(Doc);
};

exports.getOne = async (req, res, next) => {
    let id = req.params.ordId;
    let Doc = await OrderServiceModel.findById(id)
        .populate('service')
        .populate('userServicesOrded');
    if (!Doc)
        return res.status(404).end();

    return res.status(200).json(Doc);
};

exports.updateAccept = async (req, res, next) => {
    let id = req.params.ordId;

    let serviceObj = await OrderServiceModel.findById(id)
        .populate('service')
        .populate('userServicesOrded');
    if (!serviceObj)
        return res.status(404).end();


    try {
        serviceObj.status = 'Accepted'
        serviceObj.save();
        return res.status(200).json(serviceObj);

    } catch (error) {
        return res.status(500).json({
            "message": "updating process not completed",
            error: err
        });
    }


};

exports.updatereject = async (req, res, next) => {
    let id = req.params.ordId;

    let serviceObj = await OrderServiceModel.findById(id)
        .populate('service')
        .populate('userServicesOrded');

    if (!serviceObj)
        return res.status(404).end();


    try {
        serviceObj.status = 'Rejected'
        serviceObj.save();
        return res.status(200).json(serviceObj);

    } catch (error) {
        return res.status(500).json({
            "message": "updating process not completed",
            error: err
        });
    }


};

