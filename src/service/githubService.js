import axios from 'axios';
import config from '../config/config';

const { baseUrl, headers } = config;

const getGithubResponse = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (err) {
    return err;
  }
};

class GithubService {
  // eslint-disable-next-line class-methods-use-this
  async getUserInfo(userHandle) {
    const url = `${baseUrl}/users/${userHandle}`;
    const response = await getGithubResponse(url);
    return response.data;
  }

  // eslint-disable-next-line class-methods-use-this
  async getUserRepositories(userHandle) {
    const url = `${baseUrl}/users/${userHandle}/repos`;
    const response = await getGithubResponse(url);
    return response.data;
  }
}

module.exports = new GithubService();
