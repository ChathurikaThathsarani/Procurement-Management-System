/**
 * This controller is implemented for
 * the order management
 */

const Order = require("../models/orderModel");
const Site = require("../models/siteModel");
const SiteManager = require("../models/siteManagerModel");
const Supplier = require("../models/supplierModel");
const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

/**
 * This method is implemented to
 * create draft order which is to add only
 * the supplier company name
 */
const createOrder = asyncHandler(async (req, res) => {
	const { siteManagerId, placedDate, requiredDate, supplierName } = req.body;

	// Get site name
	const siteOfManager = await Site.findOne({ siteManager: siteManagerId });
	const siteName = siteOfManager.siteName;

	// Get site manager name
	const siteManger = await SiteManager.findById(siteManagerId);
	const siteManagerName = siteManger.name;

	//Order no
	const orderNo = "0000000001";

	//Status
	const status = "Draft";

	if (!siteManagerId || !placedDate || !requiredDate || !supplierName) {
		res.status(400);
		throw new Error("Please Fill all the feilds");
	} else {
		const order = new Order({
			orderNo,
			siteName,
			siteManagerName,
			placedDate,
			requiredDate,
			supplierName,
			status,
		});

		const createdOrder = await order.save();

		res.status(201).json(createdOrder);
	}
});

/**
 * This method is implemented to
 * get the supplier company names from
 * the system
 */
const getSuppliers = asyncHandler(async (req, res) => {
	const suppliers = await Supplier.find();
	res.json(suppliers);
});

/**
 * This method is implemented to
 * get all the draft orders from
 * the system
 */
const getDraftOrders = asyncHandler(async (req, res) => {
	const manager = await SiteManager.findById(req.params.id);
	const name = manager.name;
	const orders = await Order.find({ siteManagerName: name, status: "Draft" });
	res.json(orders);
});

/**
 * This method is implemented to
 * get one order from
 * the system
 */
const getOneOrder = asyncHandler(async (req, res) => {
	const order = await Order.findById(req.params.id);
	res.json(order);
});

/**
 * This method is implemented to
 * delete one order from
 * the system
 */
const deleteDraftOrder = asyncHandler(async (req, res) => {
	const order = await Order.findById(req.params.id);

	if (order) {
		await order.remove();
		res.json({ message: "Draft Order  Removed" });
	} else {
		res.status(404);
		throw new Error("Draft Order not Found");
	}
});

/**
 * This method is implemented to
 * get a list of product for a selected
 * supplier company from
 * the system
 */
const getProductListOfSupplier = asyncHandler(async (req, res) => {
	const order = await Order.findById(req.params.id);
	const supplierName = order.supplierName;
	const supplier = await Supplier.findOne({ companyName: supplierName });
	const supplierId = supplier._id;
	const products = await Product.find({ supplier: supplierId });
	res.json(products);
});

/**
 * This method is implemented to
 * convert the draft order to pending order
 * by adding product name
 * and the product quantity
 */
const draftOrderToPending = asyncHandler(async (req, res) => {
	const { productName, productQty } = req.body;

	if (!productName || !productQty) {
		res.status(400);
		throw new Error("Please Fill all the feilds");
	}

	const order = await Order.findById(req.params.id);
	const orderNo = "ref" + order._id;
	const product = await Product.findOne({ productName: productName });
	const price = product.productPrice;
	const totalPrice = price * productQty;

	if (order) {
		order.orderNo = orderNo;
		order.productName = productName;
		order.productQty = productQty;
		order.status = "Pending";
		order.totalPrice = totalPrice;

		const pendingOrder = await order.save();
		res.json(pendingOrder);
	} else {
		res.status(404);
		throw new Error("Draft Order not found");
	}
});

/**
 * This method is implemented to
 * get the orders which are not draft orders and
 * according to created site manager from
 * the system
 */
const getOrders = asyncHandler(async (req, res) => {
	const manager = await SiteManager.findById(req.params.id);
	const name = manager.name;
	const orders = await Order.find({
		siteManagerName: name,
		status: { $ne: "Draft" },
	});
	res.json(orders);
});

/**
 * This method is implemented to
 * convert the pending order to
 * approve order
 */
const pendingOrderToApproved = asyncHandler(async (req, res) => {
	const { status } = req.body;

	const order = await Order.findById(req.params.id);
	if (order) {
		order.status = status;
		const approvedOrder = await order.save();
		res.json(approvedOrder);
	} else {
		res.status(404);
		throw new Error("Pending Order not found");
	}
});

/**
 * This method is implemented to
 * get the orders for a selected supplier from
 * the system
 */
const supplierGetOrders = asyncHandler(async (req, res) => {
	const supplier = await Supplier.findById(req.params.id);
	const name = supplier.companyName;

	const orders = await Order.find({
		supplierName: name,
		$or: [{ status: "Approved" }, { status: "Placed" }, { status: "Rejected" }, { status: "Finished" }],
	});

	res.json(orders);
});

/**
 * This method is implemented for
 * the supplier to placed or reject
 * the order
 */
const approvedOrderToPlaced = asyncHandler(async (req, res) => {
	const { status, deleiveryDate, supplierComment } = req.body;

	const order = await Order.findById(req.params.id);
	if (order) {
		order.status = status;
		order.deleiveryDate = deleiveryDate;
		order.supplierComment = supplierComment;
		const placedOrder = await order.save();
		res.json(placedOrder);
	} else {
		res.status(404);
		throw new Error("Approved Order not found");
	}
});

/**
 * This method is implemented to
 * get the finished order to create
 * receipts
 */
const receiptForOrders = asyncHandler(async (req, res) => {
	const orders = await Order.find({ status: "Placed" });
	res.json(orders);
});

/**
 * This method is implemented to
 * get all of orders list for staff
 * 
 */
const getStaffOrders = asyncHandler(async (req, res) => {
	const orders = await Order.find({
		status: { $ne: "Draft" },
	});
	res.json(orders);
});


/**
 * This method is implemented to
 *  Get one order view for staff 
 */

const getStaffOneOrder = asyncHandler(async (req, res) => {
	const order = await Order.findById(req.params.id);
	res.json(order);
});


/**
 * This method is implemented to
 *  approve order  by staff
 */


const StaffOrderToApproved = asyncHandler(async (req, res) => {
	const { status } = req.body;

	const order = await Order.findById(req.params.id);
	if (order) {
		order.status = status;
		const approvedOrder = await order.save();
		res.json(approvedOrder);
	} else {
		res.status(404);
		throw new Error("Pending Order not found");
	}
});

module.exports = {
	createOrder,
	getSuppliers,
	getDraftOrders,
	deleteDraftOrder,
	getOneOrder,
	getProductListOfSupplier,
	draftOrderToPending,
	getOrders,
	pendingOrderToApproved,
	supplierGetOrders,
	approvedOrderToPlaced,
	receiptForOrders,
	getStaffOrders,
	getStaffOneOrder,
	StaffOrderToApproved,
};
