require('dotenv').config();

module.exports = {
  "development": {
    "username": null,
    "password": null,
    "database": "new-edge_development",
    "host": "127.0.0.1",
    "dialect": "postgres",
  },
  "test": {
    "username": null,
    "password": null,
    "database": "new_edge_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
  },
  "production": {
    "database": "new_edge",
    "password": process.env.DB_PASS,
    "dialect": "postgres",
    "use_env_variable": "DATABASE_URL"
  }
}
