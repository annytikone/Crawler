import User from '../model/user.model';
import GithubServer from './githubService';
import ErrorHandler from '../middlewares/errorHandler';

class UserService {
  // eslint-disable-next-line class-methods-use-this
  async getUserInfo(userHandler) {
    let userInfo = await User.findOne({ login: userHandler });
    if (userInfo) {
      return userInfo;
    }
    userInfo = await GithubServer.getUserInfo(userHandler);
    const user = User.create(userInfo);
    return user;
  }

  // eslint-disable-next-line class-methods-use-this
  async getUserRepositories(userHandler) {
    const repoList = [];
    const repos = await GithubServer.getUserRepositories(userHandler);

    repos.forEach((repo) => {
      repoList.push({
        name: repo.name,
        description: repo.description,
        ownerHandle: repo.owner.login,
        starsCount: repo.stargazers_count,
        repoLink: repo.url,
      });
    });
    if (!repoList.length) throw new ErrorHandler(404, 'NOT FOUND');
    return repoList;
  }
}
module.exports = new UserService();
