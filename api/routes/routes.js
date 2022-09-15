const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');


//  get all 
router.post('/', controller.sendData);
router.get('/', controller.getSeperate);
router.get('/', controller.getAll);
//  post data
// router.get('/api/users', controller.find);


module.exports = router;