const router = require("express").Router();
const controller = require("../controllers/userRegister");

router.get("/",controller.userRegisterGet);
router.post("/",controller.userRegisterPost);

module.exports = router;