const express = require("express");
const { registerStaff, authStaff, getStaffProfile, updateStaffProfile } = require("../controllers/staffController");
const { protect } = require("../middleware/authStaffMiddleware");
const router = express.Router();

router.route("/register").post(registerStaff);
router.route("/login").post(authStaff);
router.route("/view").get(protect, getStaffProfile);
router.route("/edit").put(protect, updateStaffProfile);

module.exports = router;
