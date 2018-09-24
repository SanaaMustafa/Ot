const express = require("express");
const router = express.Router();


const OrderServiceCustomerController = require('../controllers/Customer/order.service');
const OrderServiceAdminController = require('../controllers/Admin/services')
const checkAuth = require('../middelware/check-auth');

//customer region

router.get('/service/:serId/customer-order',checkAuth,OrderServiceCustomerController.createOrderForService);
router.post('/service/:serId/customer-order',checkAuth,OrderServiceCustomerController.getAllForOneUser);
router.put('/service/:serId/customer-order/:ordId',checkAuth,OrderServiceCustomerController.updateOne);


//Admin region 

module.exports=router;