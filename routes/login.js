const router = require("express").Router();
const controller = require("../controllers/userLogin");

router.get("/",controller.userLoginGet);
router.post("/",controller.userLoginPost);

module.exports = router;