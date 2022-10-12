const express = require("express");
const {
	registerSiteManager,
	authSiteManager,
	getSiteManagerProfile,
	updateSiteManagerProfile,
	deleteSiteManagerProfile,
} = require("../controllers/siteManagerController");
const { protect } = require("../middleware/authSiteManagerMiddleware");
const router = express.Router();

router.route("/register").post(registerSiteManager);
router.route("/login").post(authSiteManager);
router.route("/view").get(protect, getSiteManagerProfile);
router.route("/edit").put(protect, updateSiteManagerProfile);
router.route("/delete").delete(protect, deleteSiteManagerProfile);

module.exports = router;
