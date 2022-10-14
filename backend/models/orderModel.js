const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
	{
		orderNo: {
			type: String,
			required: true,
		},
		siteName: {
			type: String,
			required: true,
		},
		siteManagerName: {
			type: String,
			required: true,
		},
		placedDate: {
			type: String,
			required: true,
		},
		requiredDate: {
			type: String,
			required: true,
		},
		supplierName: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			required: true,
		},
		productName: {
			type: String,
			default: "",
		},
		productQty: {
			type: Number,
			default: 0,
		},
		totalPrice: {
			type: Number,
			default: 0,
		},
		deleiveryDate: {
			type: String,
			default: "",
		},
		supplierComment: {
			type: String,
			default: "",
		},
	},
	{
		timestamps: true,
	}
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
