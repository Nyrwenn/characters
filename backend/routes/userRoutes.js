const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userControllers");
const auth = require("../middlewares/auth");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/me", auth, userCtrl.me);

module.exports = router;
