import config from '../config/config';
import RestClient from './restClient';

module.exports = class GithubClient {
  constructor() {
    console.log('inside gith client costructor:', config.baseUrl);
    this.baseUrl = config.baseUrl;
    this.restClient = new RestClient(this.baseUrl);
  }

  async getUserInfo(userHandle) {
    const url = `/users/${userHandle}`;
    console.log('inside gith client:', url);
    const data = await this.restClient.callGet(url);
    return data;
  }
};
