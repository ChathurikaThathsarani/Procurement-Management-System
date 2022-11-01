const express = require("express");
const { registerStaff, authStaff, getStaffProfile, updateStaffProfile } = require("../controllers/staffController");
const { createSite, updateSite, getSite, getSiteId, deleteSite } = require("../controllers/siteController");
const { createGoodReceipt, getReceipts } = require("../controllers/goodReceiptController");
const { createInvoice, getInvoices } = require("../controllers/invoiceController");
const {
	receiptForOrders,
	getOneOrder,
	getStaffOrders,
	getStaffOneOrder,
	StaffOrderToApproved,
} = require("../controllers/orderController");
const { getSiteManagers } = require("../controllers/siteManagerController");
const { getSupplierProductToStaff } = require("../controllers/ProductController");
const { protect } = require("../middleware/authStaffMiddleware");
const router = express.Router();

router.route("/register").post(registerStaff);
router.route("/login").post(authStaff);
router.route("/view").get(protect, getStaffProfile);
router.route("/edit").put(protect, updateStaffProfile);

// routes for  site managment
router.route("/site/create").post(protect, createSite);
router.route("/site/get").get(protect, getSite);
router.route("/site/get/:id").get(protect, getSiteId).put(protect, updateSite).delete(protect, deleteSite);

router.route("/site-managers/get").get(protect, getSiteManagers);

//PRODUCT STAFF
router.route("/product-staff/get").get(protect, getStaffOrders);
router.route("/product-staff/get/:id").get(protect, getStaffOneOrder);
router.route("/product-staff/approve/:id").put(protect, StaffOrderToApproved);

router.route("/good-receipt/create").post(protect, createGoodReceipt);
router.route("/good-receipts").get(protect, getReceipts);

router.route("/invoice/create").post(protect, createInvoice);
router.route("/invoices").get(protect, getInvoices);

router.route("/placed-orders").get(protect, receiptForOrders);
router.route("/order/:id").get(protect, getOneOrder);

router.route("/supplier_product").get(protect, getSupplierProductToStaff);

module.exports = router;
