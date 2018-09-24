const express = require("express");
const router = express.Router();
const crypto = require('crypto');
const mime = require('mime');
const multer = require('multer');

const ServiceCustomerController = require('../controllers/Customer/services');
const ServiceAdminController = require('../controllers/Admin/services')
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

const upload = multer({
  storage: storage,
});

//customer region

router.get('/service',checkAuth,ServiceCustomerController.getAll);

//Admin region 

router.post('/service',checkAuth,upload.single('img'),ServiceAdminController.createService);
router.put('/service/:serId',checkAuth,upload.single('img'),ServiceAdminController.updateService);


module.exports=router;