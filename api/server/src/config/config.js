require('dotenv').config();

module.exports = {
  "development": {
    "username": null,
    "password": null,
    "database": "new-edge",
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
    "dialect": "postgres",
    "use_env_variable": "DATABASE_URL"
  }
}
