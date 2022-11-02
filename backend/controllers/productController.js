/**
 * This controller is implemented for
 * the product management
 */

const Product = require("../models/productModel");
const Supplier = require("../models/supplierModel");
const asyncHandler = require("express-async-handler");

/**
 * This method is implemented to
 * create supplier products 
 */
const createProduct = asyncHandler(async (req, res) => {
	const { supplier, productName, productPrice, productDescription } = req.body;
	
	//get company name
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

/**
 * This method is implemented to
 * get the supplier all products from
 * the system for site manager
 */
const getSupplierProduct = asyncHandler(async (req, res) => {
	const supProduct = await Product.find();
	res.json(supProduct);
});

/**
 * This method is implemented to
 * get the supplier all products from
 * the system for staff
 */
const getSupplierProductToStaff = asyncHandler(async (req, res) => {
	const supProduct = await Product.find();
	res.json(supProduct);
});

/**
 * This method is implemented to
 * get the supplier products for each supplier
 */
const getSuplierProductForEachSupplier = asyncHandler(async (req, res) => {
	const supplier = await Supplier.findById(req.params.id);

	const supProduct = await Product.find({ supplier });

	res.json(supProduct);
});

/**
 * This method is implemented to
 * get the supplier products by id
 */
const getSupplierProductById = asyncHandler(async (req, res) => {
	const supProduct = await Product.findById(req.params.id);

	if (supProduct) {
		res.json(supProduct);
	} else {
		res.status(404).json({ message: "Supplier Product Details not Found" });
	}
});

/**
 * This method is implemented to
 * update the supplier products
 */
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

/**
 * This method is implemented to
 * delete the supplier products
 */

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
