import userService from '../service/user.service';

class UserController {
  // eslint-disable-next-line class-methods-use-this
  async getUserInfo(req, res, next) {
    const { userHandler } = req.query;
    try {
      console.log('coming here');
      const userInfo = await userService.getUserInfo(userHandler);
      res.json(userInfo);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new UserController();
