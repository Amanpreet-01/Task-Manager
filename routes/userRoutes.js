const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authenticate = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

router.get("/", authenticate, userController.getUsers);
router.post("/", userController.addUser);
router.put("/:id", authenticate, userController.updateUser);
router.delete("/:id", authenticate, userController.deleteUser);
router.post("/login", userController.loginUser);
router.post("/upload", authenticate, upload.single("avatar"), userController.uploadAvatar);

module.exports = router;
