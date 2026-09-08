const { Client } = require("pg");

const env = require("./env");

const createDatabaseClient = () => {
  if (!env.databaseUrl) {
    throw new Error("DATABASE_URL is not configured");
  }

  return new Client({
    connectionString: env.databaseUrl,
  });
};

module.exports = {
  createDatabaseClient,
};