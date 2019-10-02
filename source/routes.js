const express = require("express");
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');

const routes = express.Router();

const multer = require('multer');
const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);
const BookingControler = require('./controllers/BookingControler')

routes.post("/sessions", SessionController.store);
routes.post("/spots", upload.single('thumbnail'), SpotController.store);
routes.get("/spots", SpotController.index);

routes.get("/dashboard", DashboardController.show);

routes.post("/spots/:spot_id/bookings", BookingControler.store)

module.exports = routes;