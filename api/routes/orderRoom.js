const express = require("express");
const router = express.Router();


const OrderRoomCustomerController = require('../controllers/Customer/orderRoom');
const OrderRoomAdminController = require('../controllers/Admin/services')
const checkAuth = require('../middelware/check-auth');

//customer region

router.get('/room/:roomId/customer-order',checkAuth,OrderRoomCustomerController.createOne);
router.post('/room/:roomId/customer-order',checkAuth,OrderRoomCustomerController.getAllForOneUser);
router.put('/room/:roomId/customer-order/:ordId',checkAuth,OrderRoomCustomerController.updateOne);


//Admin region 

module.exports=router;