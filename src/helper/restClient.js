import axios from 'axios';

module.exports = class RestClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.headers = { 'Content-Type': 'application/json' };
  }

  async callGet(url) {
    const response = await axios.get(this.baseUrl + url, this.headers);
    return response.data;
  }
};
