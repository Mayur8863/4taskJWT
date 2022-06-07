const router = require("express").Router();
const controller = require("../controllers/userLogout");
const verify = require("../middlewares/verifyToken");
router.get("/",verify,controller.userLogoutGet);

module.exports = router;