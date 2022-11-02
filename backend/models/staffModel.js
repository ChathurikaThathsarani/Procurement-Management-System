/**
 * This model is implemented for
 * store staff account details in the database
 */
const mongoose = require("mongoose");

const staffSchema = mongoose.Schema(
	{
		staffId: {
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
			default: true,
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
		qualifications: {
			type: String,
			required: true,
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

const Staff = mongoose.model("Staff", staffSchema);

module.exports = Staff;
