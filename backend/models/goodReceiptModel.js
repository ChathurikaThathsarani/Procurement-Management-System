const mongoose = require("mongoose");

const goodReceiptSchema = mongoose.Schema(
	{
		orderNo: {
			type: String,
			required: true,
		},
		productName: {
			type: String,
			required: true,
		},
		productQuantity: {
			type: Number,
			required: true,
		},
		deliveryDate: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const GoodReceipt = mongoose.model("GoodReceipt", goodReceiptSchema);

module.exports = GoodReceipt;
