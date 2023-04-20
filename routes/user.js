const { Router } = require("express");
const router = new Router();

router.post("/signup", (request, response) => {
  const credentials = request.body;
});

module.exports = router;
