const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');


//  get all 
router.post('/api/users', controller.sendData);
//  post data
router.get('/api/users', controller.find);


module.exports = router;