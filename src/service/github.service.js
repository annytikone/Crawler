import axios from 'axios';
import config from '../config/config';

const { baseUrl } = config;

const getGithubResponse = async (url) => {
  try {
    return await axios.get(url);
  } catch (err) {
    return err;
  }
};

class GithubService {
  async getUserInfo(userHandle) {
    const url = `${baseUrl}/users/${userHandle}`;
    const response = await getGithubResponse(url);
    return response.data;
  }

  async getUserRepositories(userHandle) {
    const url = `${baseUrl}/users/${userHandle}/repos`;
    const response = await getGithubResponse(url);
    return response.data;
  }
}

module.exports = new GithubService();
