const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
	{
		supplier: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "Supplier",
		},
		companyName: {
			type: String,
			required: true,
		},
		productName: {
			type: String,
			required: true,
		},
		productPrice: {
			type: Number,
			required: true,
		},
		productDescription: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
