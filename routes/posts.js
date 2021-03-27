const router = require("express").Router();
const VerifySession = require("./VerifySession");

router.get("/", VerifySession, (req, res) => {
  res.json({
    posts: {
      title: "My first Post",
      description: "Random data",
    },
  });
});

module.exports = router;
