import express from 'express';
import userController from '../controller/user.controller';

const router = express.Router();

// http://localhost:8080/v1/?userHandler=annytikone
router.get('/', userController.getUserInfo);

// http://localhost:8080/v1/repo/?userHandler=annytikone
router.get('/repo', userController.searchGithubRepositories);

module.exports = router;
