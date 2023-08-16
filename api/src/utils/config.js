require("dotenv").config();

const env = process.env;

module.exports = {
  DB_USER: env.DB_USER,
  DB_PASSWORD: env.DB_PASSWORD,
  DB_HOST: env.DB_HOST,
  URL: env.URL,
  API_KEY: env.API_KEY,
};

