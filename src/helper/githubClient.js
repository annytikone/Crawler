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
};
