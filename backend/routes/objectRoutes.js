const express = require("express");
const router = express.Router();
const objectCtrl = require("../controllers/objectController");
const auth = require("../middlewares/auth");
const multer = require("../middlewares/multer");

router.post("/create", auth, multer, objectCtrl.createObject);
router.get("/allObjects", auth, objectCtrl.getAllObjects);
router.get("/:id", auth, objectCtrl.getOneObject);
router.put("/:id", auth, multer, objectCtrl.modifyObject);
router.delete("/:id", auth, multer, objectCtrl.deleteObject);

module.exports = router;
