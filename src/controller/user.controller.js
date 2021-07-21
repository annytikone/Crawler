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

  async searchGithubRepositories(req, res, next) {
    const { repository } = req.query;
    try {
      const userRepoList = await userService.searchGithubRepositories(
        repository
      );
      res.json(userRepoList);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new UserController();
