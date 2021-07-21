import axios from 'axios';
import config from '../config/config';

const { baseUrl } = config;

const getGithubResponse = async (url) => {
  try {
    return await axios.get(url);
  } catch (err) {
    console.log('github response error', err);
    return err;
  }
};

class GithubService {
  async getUserInfo(userHandle) {
    const url = `${baseUrl}/users/${userHandle}`;
    const response = await getGithubResponse(url);
    return response.data;
  }

  async searchGithubRepositories(repo) {
    const url = `${baseUrl}/search/repositories?q=${repo}`;
    console.log(url);
    const response = await getGithubResponse(url);
    return response.data.items;
  }
}
// https://api.github.com/search/repositories?q=${restData.repoName}&per_page=4
module.exports = new GithubService();
