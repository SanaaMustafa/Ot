const mongoose = require("mongoose");
const serviceModel = require("../../models/services");
const toImgUrl = require('../utils/index')



exports.getAll = async (req, res, next) => {
    let details = await serviceModel.find();
    return res.status(200).json(details);
};







