const express = require("express");
const { registerStaff, authStaff, getStaffProfile, updateStaffProfile } = require("../controllers/staffController");
const { createSite } = require("../controllers/siteController");
const { createGoodReceipt, getReceipts } = require("../controllers/goodReceiptController");
const { createInvoice, getInvoices } = require("../controllers/invoiceController");
const { receiptForOrders, getOneOrder } = require("../controllers/orderController");
const { protect } = require("../middleware/authStaffMiddleware");
const router = express.Router();

router.route("/register").post(registerStaff);
router.route("/login").post(authStaff);
router.route("/view").get(protect, getStaffProfile);
router.route("/edit").put(protect, updateStaffProfile);

router.route("/site/create").post(createSite);

router.route("/good-receipt/create").post(protect, createGoodReceipt);
router.route("/good-receipts").get(protect, getReceipts);

router.route("/invoice/create").post(protect, createInvoice);
router.route("/invoices").get(protect, getInvoices);

router.route("/placed-orders").get(receiptForOrders);
router.route("/order/:id").get(getOneOrder);

module.exports = router;
