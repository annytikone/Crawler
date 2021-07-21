import dotenv from 'dotenv';

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  dbConfig: process.env.MONGO_URL,
  baseUrl: process.env.GITHUB_URL,
  headers: process.env.GITHUB_HEADERS,
};
