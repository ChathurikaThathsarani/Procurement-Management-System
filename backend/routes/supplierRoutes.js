const express = require("express");
const {
	registerSupplier,
	authSupplier,
	getSupplierProfile,
	updateSupplierProfile,
	deleteSupplierProfile,
} = require("../controllers/supplierController");
const {
	createProduct,
	getSupplierProductById,
	getSuplierProductForEachSupplier,
	updateSupplierProduct,
	deleteSupplierProduct,
} = require("../controllers/productController");
const { supplierGetOrders, approvedOrderToPlaced, getOneOrder } = require("../controllers/orderController");
const { protect } = require("../middleware/authSupplierMiddleware");
const router = express.Router();

router.route("/register").post(registerSupplier);
router.route("/login").post(authSupplier);
router.route("/view").get(protect, getSupplierProfile);
router.route("/edit").put(protect, updateSupplierProfile);
router.route("/delete").delete(protect, deleteSupplierProfile);

router.route("/product/create").post(createProduct);
router.route("/supplier-products/:id").get(protect, getSuplierProductForEachSupplier);
router
	.route("/supplier-product/:id")
	.get(protect, getSupplierProductById)
	.put(protect, updateSupplierProduct)
	.delete(protect, deleteSupplierProduct);

router.route("/get-orders/:id").get(protect, supplierGetOrders);
router.route("/order-to-placed/:id").put(protect, approvedOrderToPlaced);
router.route("/order/:id").get(protect, getOneOrder);

module.exports = router;
