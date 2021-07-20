import User from '../model/user.model';
import GithubClient from '../helper/githubClient';

class UserService {
  // eslint-disable-next-line class-methods-use-this
  async getUserInfo(userHandler) {
    const githCleint = new GithubClient();

    let userInfo = await User.findOne({ login: userHandler });
    if (userInfo) {
      return userInfo;
    }
    userInfo = await githCleint.getUserInfo(userHandler);
    const user = User.create(userInfo);
    return user;
  }

  // eslint-disable-next-line class-methods-use-this
  async getUserRepositories(userHandler) {
    const githCleint = new GithubClient();
    const repoList = [];
    const repos = await githCleint.getUserRepositories(userHandler);

    repos.forEach((repo) => {
      repoList.push({
        name: repo.name,
        description: repo.description,
        ownerHandle: repo.owner.login,
        starsCount: repo.stargazers_count,
        repoLink: repo.url,
      });
    });
    return repoList;
  }
}
module.exports = new UserService();
