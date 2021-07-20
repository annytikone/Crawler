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
}
module.exports = new UserService();
