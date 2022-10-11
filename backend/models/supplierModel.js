const mongoose = require("mongoose");

const supplierSchema = mongoose.Schema(
	{
		supplierId: {
			type: String,
			required: true,
		},
		ownerName: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
		dob: {
			type: String,
			required: true,
		},
		nic: {
			type: String,
			required: true,
			unique: true,
		},
		gender: {
			type: String,
			required: true,
		},
		telephone: {
			type: String,
			required: true,
		},
		companyName: {
			type: String,
			required: true,
		},
		companyAddress: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		pic: {
			type: String,
			required: true,
			default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
		},
		suppliyingMaterials: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = Supplier;
