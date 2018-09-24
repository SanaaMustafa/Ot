const express = require("express");
const router = express.Router();


const OrderServiceCustomerController = require('../controllers/Customer/order.service');
const OrderServiceAdminController = require('../controllers/Admin/orderService')
const checkAuth = require('../middelware/check-auth');

//customer region

router.get('/service/:serId/customer-order',checkAuth,OrderServiceCustomerController.createOrderForService);
router.post('/service/:serId/customer-order',checkAuth,OrderServiceCustomerController.getAllForOneUser);
router.put('/service/:serId/customer-order/:ordId',checkAuth,OrderServiceCustomerController.updateOne);


//Admin region 
router.get('/service/:serId/admin',checkAuth,OrderServiceAdminController.getAll);
router.get('/service/:serId/admin/:ordId',checkAuth,OrderServiceAdminController.getOne);
router.put('/service/:serId/admin/:ordId/accept',checkAuth,OrderServiceAdminController.updateAccept);
router.put('/service/:serId/admin/:ordId/cancle',checkAuth,OrderServiceAdminController.updatereject);




module.exports=router;