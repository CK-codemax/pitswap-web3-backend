const router = require("express").Router();
const {
  proxyMiddleware, sayHello
} = require("../controllers/tokenController");


router.use("/swap", proxyMiddleware);
router.get('/hello', sayHello);

module.exports = router;