const express = require("express");
const { registerSupplier, authSupplier, getSupplierProfile, updateSupplierProfile, deleteSupplierProfile } = require("../controllers/supplierController");
const { protect } = require("../middleware/authSupplierMiddleware");
const router = express.Router();

router.route("/register").post(registerSupplier);
router.route("/login").post(authSupplier);
router.route("/view").get(protect, getSupplierProfile);
router.route("/edit").put(protect, updateSupplierProfile);
router.route("/delete").delete(protect, deleteSupplierProfile);

module.exports = router;