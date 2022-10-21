const express = require("express");
const {
	registerSiteManager,
	authSiteManager,
	getSiteManagerProfile,
	updateSiteManagerProfile,
	deleteSiteManagerProfile,
} = require("../controllers/siteManagerController");
const {
	createOrder,
	getSuppliers,
	getDraftOrders,
	deleteDraftOrder,
	getOneOrder,
	getProductListOfSupplier,
	draftOrderToPending,
	getOrders,
	pendingOrderToApproved,
} = require("../controllers/orderController");
const { protect } = require("../middleware/authSiteManagerMiddleware");
const router = express.Router();

router.route("/register").post(registerSiteManager);
router.route("/login").post(authSiteManager);
router.route("/view").get(protect, getSiteManagerProfile);
router.route("/edit").put(protect, updateSiteManagerProfile);
router.route("/delete").delete(protect, deleteSiteManagerProfile);

router.route("/order/draft/create").post(protect, createOrder);
router.route("/order/draft/suppliers").get(protect, getSuppliers);
router.route("/orders/draft/:id").get(protect, getDraftOrders);
router.route("/order/draft/delete/:id").delete(protect, deleteDraftOrder);
router.route("/order/:id").get(protect, getOneOrder);
router.route("/orders/draft/products/:id").get(protect, getProductListOfSupplier);
router.route("/order/pending/:id").put(protect, draftOrderToPending);
router.route("/orders/:id").get(protect, getOrders);
router.route("/order/approved/:id").put(protect, pendingOrderToApproved);

module.exports = router;
