import config from '../config/config';
import RestClient from './restClient';

module.exports = class GithubClient {
  constructor() {
    this.baseUrl = config.baseUrl;
    this.restClient = new RestClient(this.baseUrl);
  }

  async getUserInfo(userHandle) {
    const url = `/users/${userHandle}`;
    const data = await this.restClient.callGet(url);
    return data;
  }

  async getUserRepositories(userHandle) {
    const url = `/users/${userHandle}/repos`;
    const data = await this.restClient.callGet(url);
    return data;
  }
};

// https://api.github.com/search/repositories?q=${restData.repoName}&per_page=4
// https://api.github.com/users/${restData.username}/repos
