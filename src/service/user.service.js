import User from '../model/user.model';
import GithubService from './github.service';
import { ErrorHandler } from '../middlewares/errorHandler';

class UserService {
  async getUserInfo(userHandler) {
    let userInfo = await User.findOne({ login: userHandler });
    if (userInfo) {
      return userInfo;
    }
    userInfo = await GithubService.getUserInfo(userHandler);
    if (!userInfo) throw new ErrorHandler(404, 'USER NOT FOUND');
    const user = User.create(userInfo);
    return user;
  }

  async searchGithubRepositories(repository) {
    const repoList = [];
    const repos = await GithubService.searchGithubRepositories(repository);
    if (!repos) throw new ErrorHandler(404, 'REPO NOT FOUND');

    repos.forEach((repo) => {
      repoList.push({
        repoName: repo.name,
        description: repo.description,
        ownerName: repo.owner.login,
        starsCount: repo.stargazers_count,
        repoLink: repo.url,
      });
    });
    return repoList;
  }
}
module.exports = new UserService();
