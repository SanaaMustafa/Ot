const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dbconnection = require('./api/config/config');

dbconnection();


const userRoutes = require('./api/routes/user');
const serviceRoutes = require('./api/routes/service');
const orderServiceRoutes = require('./api/routes/orderService');
const roomRoutes = require('./api/routes/room');
const orderRoomroutes = require('./api/routes/orderRoom');


app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use(express.static("upload"));




app.use("/", userRoutes);
app.use('/',serviceRoutes);
app.use('/',orderServiceRoutes);
app.use('/',roomRoutes);
app.use('/',orderRoomroutes);



app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
