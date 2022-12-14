/**
 * This model is implemented for
 * store site manager details in the database
 */
const mongoose = require("mongoose");

const siteManagerSchema = mongoose.Schema(
	{
		siteManagerId: {
			type: String,
			required: true,
		},
		name: {
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
		address: {
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
		experience: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const SiteManager = mongoose.model("SiteManager", siteManagerSchema);

module.exports = SiteManager;
