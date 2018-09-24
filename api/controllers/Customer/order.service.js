const mongoose = require("mongoose");
const OrderServiceModel = require("../../models/ordersrevice");


//create one 

exports.createOrderForService = async (req, res, next) => {
    req.body.userServicesOrded = req.userData.userId;
    req.body.service = req.params.serId;
    let createdObj = await OrderServiceModel.create(req.body);
    return res.status(200).json(returnedObject);
};


exports.getAllForOneUser = async (req, res, next) => {
    let details = await OrderServiceModel.find({ userServicesOrded: req.userData.userId });
    return res.status(200).json(details);
};


exports.updateOne = async (req, res, next) => {
    let id = req.params.ordId;

    let serviceObj = await OrderServiceModel.findById(id);
    if (!serviceObj)
        return res.status(404).end();
    if (serviceObj.status != 'Pindding')
        return res.status(403).json({ message: 'you cant update this order' });

    try {
        let newDoc = await OrderServiceModel.findByIdAndUpdate({ _id: id }, req.body, { new: true });

        return res.status(200).json(newDoc)

    } catch (error) {
        return res.status(500).json({
            "message": "updating process not completed",
            error: err
        });
    }


};



