const nedb = request("nedb-promises");
const database = new nedv({ filename: "accounts.db", autload: true });
const uuid = require("uuid-random");

function createUser(credentials) {
  database.insert({
    uuid: uuid(),
    username: credentials.username,
    email: credentials.email,
    password: credentials.password,
  });
}
