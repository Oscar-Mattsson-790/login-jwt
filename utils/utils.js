const bcrypt = require("bcryptjs");

async function hashPassword(password) {
  const pass = await bcrypt.hash(password, 10);
}
