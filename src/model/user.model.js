// import validator from 'validator';

import mongoose from '../utils/connect';

// const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  node_id: {
    type: String,
    required: true,
  },
  avatar_url: String,
  gravatar_id: String,
  url: String,
  html_url: String,
  followers_url: String,
  following_url: String,
  gists_url: String,
  starred_url: String,
  subscriptions_url: String,
  organizations_url: String,
  repos_url: String,
  events_url: String,
  received_events_url: String,
  type: String,
  site_admin: Boolean,
  name: String,
  company: String,
  blog: String,
  location: String,
  email: String,
  hireable: Boolean,
  bio: String,
  twitter_username: String,
  public_repos: Number,
  public_gists: Number,
  followers: Number,
  following: Number,
  created_at: String,
  updated_at: String,
  private_gists: Number,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
