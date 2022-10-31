const Order = require("../models/orderModel");
const Site = require("../models/siteModel");
const SiteManager = require("../models/siteManagerModel");
const Supplier = require("../models/supplierModel");
const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

//Create draft order
const createOrder = asyncHandler(async (req, res) => {
	const { siteManagerId, placedDate, requiredDate, supplierName } = req.body;

	// Get site name
	const siteOfManager = await Site.findOne({ siteManager: siteManagerId });
	const siteName = siteOfManager.siteName;

	// Get site manager name
	const siteManger = await SiteManager.findById(siteManagerId);
	const siteManagerName = siteManger.name;

	//Order no
	const orderNo = "Test";

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

// Get suppliers names to create draft order
const getSuppliers = asyncHandler(async (req, res) => {
	const suppliers = await Supplier.find();
	res.json(suppliers);
});

// Get all draft orders
const getDraftOrders = asyncHandler(async (req, res) => {
	const manager = await SiteManager.findById(req.params.id);
	const name = manager.name;
	const orders = await Order.find({ siteManagerName: name, status: "Draft" });
	res.json(orders);
});

// Get one order
const getOneOrder = asyncHandler(async (req, res) => {
	const order = await Order.findById(req.params.id);
	res.json(order);
});

// Delete draft order
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

// Get product list of a particular supplier
const getProductListOfSupplier = asyncHandler(async (req, res) => {
	const order = await Order.findById(req.params.id);
	const supplierName = order.supplierName;
	const supplier = await Supplier.findOne({ companyName: supplierName });
	const supplierId = supplier._id;
	const products = await Product.find({ supplier: supplierId });
	res.json(products);
});

// Convert draft order to pending order
const draftOrderToPending = asyncHandler(async (req, res) => {
	const { productName, productQty } = req.body;

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

// Get all orders
const getOrders = asyncHandler(async (req, res) => {
	const manager = await SiteManager.findById(req.params.id);
	const name = manager.name;
	const orders = await Order.find({
		siteManagerName: name,
		status: { $ne: "Draft" },
	});
	res.json(orders);
});

// Convert pending order to approved order
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

//Supplier get the order
const supplierGetOrders = asyncHandler(async (req, res) => {
	const supplier = await Supplier.findById(req.params.id);
	const name = supplier.companyName;

	const orders = await Order.find({
		supplierName: name,
		$or: [{ status: "Approved" }, { status: "Placed" }, { status: "Reject" }, { status: "Finished" }],
	});

	res.json(orders);
});

// Convert pending order to approved order
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

//Supplier get the order
const receiptForOrders = asyncHandler(async (req, res) => {
	const orders = await Order.find({ status: "Placed" });
	res.json(orders);
});


// get all ordr for staff
const getStaffOrders = asyncHandler(async (req, res) => {
	const orders = await Order.find();
	 orders.totalPrice <= 100000;
	  res.json(orders);
});


// Get one order for staff
const getStaffOneOrder = asyncHandler(async (req, res) => {
	const order = await Order.findById(req.params.id);
	res.json(order);
});

// staff order approve
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
