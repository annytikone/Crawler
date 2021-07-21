import userService from '../service/user.service';

class UserController {
  async getUserInfo(req, res, next) {
    const { userHandler } = req.query;
    try {
      const userGithubInfo = await userService.getUserInfo(userHandler);
      res.json(userGithubInfo);
    } catch (err) {
      next(err);
    }
  }

  async getUserRepositories(req, res, next) {
    const { userHandler } = req.query;
    try {
      const userRepoList = await userService.getUserRepositories(userHandler);
      res.json(userRepoList);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new UserController();
