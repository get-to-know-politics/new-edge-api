"use strict";

require('dotenv').config();

module.exports = {
  "development": {
    "username": null,
    "password": null,
    "database": "new-edge",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": null,
    "password": null,
    "database": "new_edge_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  }
};
//# sourceMappingURL=config.js.map