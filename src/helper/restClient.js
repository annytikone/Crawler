import axios from 'axios';

module.exports = class RestClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async callGet(url) {
    console.log('rest client call get', this.baseUrl + url);
    const response = await axios.get(this.baseUrl + url, {
      headers: { 'Content-Type': 'application/json' },
    });
    console.log('github response:', response.data);
    return response.data;
  }
};
