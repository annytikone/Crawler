import express from 'express';
import userController from '../controller/user.controller';

const router = express.Router();

// http://localhost:8080/v1/?userHandler=annytikone req.query.userHandler
// search user handler
router.get('/', userController.getUserInfo);

module.exports = router;
