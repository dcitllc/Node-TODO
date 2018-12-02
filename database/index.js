const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    username: "Dan",
    database: "todo_db"
  }
});

module.exports = knex;
