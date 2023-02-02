const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');


router.get('/info', userController.getUser);
router.post('/create', userController.postUser);
router.put('/update', userController.updateUser);
router.delete('/del', userController.delUser);


module.exports = router;