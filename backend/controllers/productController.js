const Product = require("../models/productModel");
const Supplier = require("../models/supplierModel");
const asyncHandler = require("express-async-handler");
const createProduct = asyncHandler(async (req, res) => {
	const { supplier, productName, productPrice, productDescription } = req.body;
	const suppliers = await Supplier.findOne({ _id: supplier });
	const companyName = suppliers.companyName;

	if (!supplier || !productName || !productPrice || !productDescription) {
		res.status(400);
		throw new Error("Please Fill all the feilds");
	} else {
		const product = new Product({
			supplier,
			productName,
			productPrice,
			productDescription,
			companyName,
		});

		const createdProduct = await product.save();

		res.status(201).json(createdProduct);
	}
});

const getSupplierProduct = asyncHandler(async (req, res) => {
	const supProduct = await Product.find();
	res.json(supProduct);
});

const getSupplierProductToStaff = asyncHandler(async (req, res) => {
	const supProduct = await Product.find();
	res.json(supProduct);
});

const getSuplierProductForEachSupplier = asyncHandler(async (req, res) => {
	const supplier = await Supplier.findById(req.params.id);

	const supProduct = await Product.find({ supplier });

	res.json(supProduct);
});

const getSupplierProductById = asyncHandler(async (req, res) => {
	const supProduct = await Product.findById(req.params.id);

	if (supProduct) {
		res.json(supProduct);
	} else {
		res.status(404).json({ message: "Supplier Product Details not Found" });
	}
});

const updateSupplierProduct = asyncHandler(async (req, res) => {
	const { supplier, productName, productPrice, productDescription } = req.body;

	const supProduct = await Product.findById(req.params.id);

	if (supProduct) {
		supProduct.supplier = supplier;
		supProduct.productName = productName;
		supProduct.productPrice = productPrice;
		supProduct.productDescription = productDescription;

		const updatedProduct = await supProduct.save();
		res.json(updatedProduct);
	} else {
		res.status(404);
		throw new Error("Product not Found");
	}
});

const deleteSupplierProduct = asyncHandler(async (req, res) => {
	const supProduct = await Product.findById(req.params.id);

	if (supProduct) {
		await supProduct.remove();
		res.json({ message: "Product Removed" });
	} else {
		res.status(404);
		throw new Error("Product not Found");
	}
});

module.exports = {
	createProduct,
	getSupplierProduct,
	getSuplierProductForEachSupplier,
	updateSupplierProduct,
	deleteSupplierProduct,
	getSupplierProductById,
	getSupplierProductToStaff,
};
