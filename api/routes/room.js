const express = require("express");
const router = express.Router();
const crypto = require('crypto');
const mime = require('mime');
const multer = require('multer');

const RoomCustomerController = require('../controllers/Customer/room');
const RoomAdminController = require('../controllers/Admin/services')
const checkAuth = require('../middelware/check-auth');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      cb(null, raw.toString('hex') + Date.now() + '.' + mime.getExtension(file.mimetype));
    });//
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

router.get('/room',checkAuth,RoomCustomerController.getAllForUsers);
router.get('/room/:roomId',checkAuth,RoomCustomerController.getOneForUsers);


module.exports=router;
