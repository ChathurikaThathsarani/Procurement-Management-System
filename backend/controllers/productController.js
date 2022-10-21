const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");
const createProduct = asyncHandler(async (req, res) => {
	const { supplier, productName, productPrice, productDescription } = req.body;

	if (!supplier || !productName || !productPrice || !productDescription) {
		res.status(400);
		throw new Error("Please Fill all the feilds");
	} else {
		const product = new Product({
			supplier,
			productName,
			productPrice,
			productDescription,
		});

		const createdProduct = await product.save();

		res.status(201).json(createdProduct);
	}
});

module.exports = {
	createProduct,
};
