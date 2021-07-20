import User from '../model/user.model';
import GithubClient from '../helper/githubClient';

class UserService {
  // eslint-disable-next-line class-methods-use-this
  async getUserInfo(userHandler) {
    console.log('inside User Service');

    const githCleint = new GithubClient();

    let userInfo = await User.findOne({ login: userHandler });
    if (userInfo) {
      return userInfo;
    }
    userInfo = await githCleint.getUserInfo(userHandler);
    console.log('User Information:', userInfo);
    const user = User.create(userInfo);
    return user;
  }
}
module.exports = new UserService();
