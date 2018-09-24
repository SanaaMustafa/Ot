const express = require("express");
const router = express.Router();


const OrderRoomCustomerController = require('../controllers/Customer/orderRoom');
const OrderRoomAdminController = require('../controllers/Admin/orderRoom')
const checkAuth = require('../middelware/check-auth');

//customer region

router.get('/room/:roomId/customer-order',checkAuth,OrderRoomCustomerController.createOne);
router.post('/room/:roomId/customer-order',checkAuth,OrderRoomCustomerController.getAllForOneUser);
router.put('/room/:roomId/customer-order/:ordId',checkAuth,OrderRoomCustomerController.updateOne);


//Admin region 
router.get('/room/:roomId/admin',checkAuth,OrderRoomAdminController.getAll);
router.get('/room/:roomId/admin/:ordId',checkAuth,OrderRoomAdminController.getOne);
router.put('/room/:roomId/admin/:ordId/accept',checkAuth,OrderRoomAdminController.updateAccept);
router.put('/room/:roomId/admin/:ordId/cancle',checkAuth,OrderRoomAdminController.updatereject);



module.exports=router;