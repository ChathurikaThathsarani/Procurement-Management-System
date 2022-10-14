const mongoose = require("mongoose");

const invoiceSchema = mongoose.Schema(
	{
		orderNo: {
			type: String,
			required: true,
		},
		bank: {
			type: String,
			required: true,
		},
		branch: {
			type: String,
			required: true,
		},
		accountNumber: {
			type: String,
			required: true,
		},
		depositAmount: {
			type: Number,
			required: true,
		},
		depositDate: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
