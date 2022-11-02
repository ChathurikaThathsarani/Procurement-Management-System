/**
 * This controller is implemented for
 * the staff user management
 */
const asyncHandler = require("express-async-handler");
const Staff = require("../models/staffModel");
const {} = require("../routes/staffRoutes");
const {} = require("../routes/supplierRoutes");
const {} = require("../routes/siteManagerRoutes");
const generateToken = require("../utils/generateToken");
const bcrypt = require("bcryptjs");

/**
 * This method is implemented to
 * create a staff account
 */
const registerStaff = asyncHandler(async (req, res) => {
	const { staffId, name, dob, nic, telephone, address, email, password, pic, qualifications, experience } = req.body;

	const staffExists = await Staff.findOne({ nic });
	if (staffExists) {
		res.status(400);
		throw new Error("Staff Profile Exists !");
	}

	const staff = new Staff({
		staffId,
		name,
		dob,
		nic,
		telephone,
		address,
		email,
		password,
		pic,
		qualifications,
		experience,
	});

	const salt = await bcrypt.genSalt(10);

	staff.password = await bcrypt.hash(password, salt);

	await staff.save();

	if (staff) {
		res.status(201).json({
			_id: staff._id,
			staffId: staff.staffId,
			name: staff.name,
			isAdmin: staff.isAdmin,
			dob: staff.dob,
			nic: staff.nic,
			telephone: staff.telephone,
			address: staff.address,
			email: staff.email,
			pic: staff.pic,
			qualifications: staff.qualifications,
			experience: staff.qualifications,
			token: generateToken(staff._id),
		});
	} else {
		res.status(400);
		throw new Error("Staff Registration Failed !");
	}
});

/**
 * This method is implemented to
 * login to a staff account
 */
const authStaff = asyncHandler(async (req, res) => {
	const { nic, password } = req.body;

	const staff = await Staff.findOne({ nic });

	if (!staff) {
		res.status(400);
		throw new Error("Invalid NIC or Password");
	}

	const isMatch = await bcrypt.compare(password, staff.password);

	if (!isMatch) {
		res.status(400);
		throw new Error("Invalid NIC or Password");
	} else {
		res.status(201).json({
			_id: staff._id,
			staffId: staff.staffId,
			name: staff.name,
			isAdmin: staff.isAdmin,
			dob: staff.dob,
			nic: staff.nic,
			telephone: staff.telephone,
			address: staff.address,
			email: staff.email,
			pic: staff.pic,
			qualifications: staff.qualifications,
			experience: staff.qualifications,
			token: generateToken(staff._id),
		});
	}
});

/**
 * This method is implemented to
 * get own staff account
 */
const getStaffProfile = asyncHandler(async (req, res) => {
	const staff = await Staff.findById(req.staff._id);

	if (staff) {
		res.status(201).json(staff);
	} else {
		res.status(400);
		throw new Error("Staff Not Found !");
	}
});

/**
 * This method is implemented to
 * update a staff account
 */
const updateStaffProfile = asyncHandler(async (req, res) => {
	const staff = await Staff.findById(req.staff._id);

	if (staff) {
		staff.staffId = req.body.staffId || staff.staffId;
		staff.name = req.body.name || staff.name;
		staff.dob = req.body.dob || staff.dob;
		staff.nic = req.body.nic || staff.nic;
		staff.telephone = req.body.telephone || staff.telephone;
		staff.address = req.body.address || staff.address;
		staff.email = req.body.email || staff.email;
		staff.pic = req.body.pic || staff.pic;
		staff.qualifications = req.body.qualifications || staff.qualifications;
		staff.experience = req.body.experience || staff.qualifications;
		if (req.body.password) {
			const salt = await bcrypt.genSalt(10);
			staff.password = await bcrypt.hash(req.body.password, salt);
		}
		const updatedStaff = await staff.save();

		res.json({
			_id: updatedStaff._id,
			staffId: updatedStaff.staffId,
			name: updatedStaff.name,
			isStaff: updatedStaff.isStaff,
			dob: updatedStaff.dob,
			nic: updatedStaff.nic,
			telephone: updatedStaff.telephone,
			address: updatedStaff.address,
			email: updatedStaff.email,
			pic: updatedStaff.pic,
			experience: updatedStaff.experience,
			token: generateToken(updatedStaff._id),
		});
	} else {
		res.status(404);
		throw new Error("Staff Not Found !");
	}
});

module.exports = { registerStaff, authStaff, getStaffProfile, updateStaffProfile };
