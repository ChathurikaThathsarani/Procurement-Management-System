const asyncHandler = require("express-async-handler");
const SiteManager = require("../models/siteManagerModel");
const {} = require("../routes/siteManagerRoutes");
const generateToken = require("../utils/generateToken");
const bcrypt = require("bcryptjs");

const registerSiteManager = asyncHandler(async (req, res) => {
	const { siteManagerId, name, dob, nic, gender, telephone, address, email, password, pic, experience } = req.body;

	const siteManagerExists = await SiteManager.findOne({ nic });
	if (siteManagerExists) {
		res.status(400);
		throw new Error("Site Manager Profile Exists !");
	}

	const siteManager = new SiteManager({
		siteManagerId,
		name,
		dob,
		nic,
		gender,
		telephone,
		address,
		email,
		password,
		pic,
		experience,
	});

	const salt = await bcrypt.genSalt(10);

	siteManager.password = await bcrypt.hash(password, salt);

	await siteManager.save();

	if (siteManager) {
		res.status(201).json({
			_id: siteManager._id,
			siteManagerId: siteManager.siteManagerId,
			name: siteManager.name,
			dob: siteManager.dob,
			nic: siteManager.nic,
			gender: siteManager.gender,
			telephone: siteManager.telephone,
			address: siteManager.address,
			email: siteManager.email,
			pic: siteManager.pic,
			experience: siteManager.experience,
			token: generateToken(siteManager._id),
		});
	} else {
		res.status(400);
		throw new Error("Site Manager Registration Failed !");
	}
});

const authSiteManager = asyncHandler(async (req, res) => {
	const { nic, password } = req.body;

	const siteManager = await SiteManager.findOne({ nic });

	if (!siteManager) {
		res.status(400);
		throw new Error("Invalid NIC or Password");
	}

	const isMatch = await bcrypt.compare(password, siteManager.password);

	if (!isMatch) {
		res.status(400);
		throw new Error("Invalid NIC or Password");
	} else {
		res.status(201).json({
			_id: siteManager._id,
			siteManagerId: siteManager.siteManagerId,
			name: siteManager.name,
			dob: siteManager.dob,
			nic: siteManager.nic,
			gender: siteManager.gender,
			telephone: siteManager.telephone,
			address: siteManager.address,
			email: siteManager.email,
			pic: siteManager.pic,
			experience: siteManager.experience,
			token: generateToken(siteManager._id),
		});
	}
});

const getSiteManagers = asyncHandler(async (req, res) => {
	const siteManagers = await SiteManager.find();
	res.json(siteManagers);
});

const getSiteManagerProfile = asyncHandler(async (req, res) => {
	const siteManager = await SiteManager.findById(req.siteManager._id);

	if (siteManager) {
		res.json(siteManager);
	} else {
		res.status(400);
		throw new Error("Site Manager not found !");
	}
});

const getSiteManagerProfileById = asyncHandler(async (req, res) => {
	const siteManager = await SiteManager.findById(req.params._id);

	if (siteManager) {
		res.json(siteManager);
	} else {
		res.status(400);
		throw new Error("Site Manager not found !");
	}
});

const updateSiteManagerProfile = asyncHandler(async (req, res) => {
	const siteManager = await SiteManager.findById(req.siteManager._id);

	if (siteManager) {
		siteManager.siteManagerId = req.body.siteManagerId || siteManager.siteManagerId;
		siteManager.name = req.body.name || siteManager.name;
		siteManager.dob = req.body.dob || siteManager.dob;
		siteManager.nic = req.body.nic || siteManager.nic;
		siteManager.gender = req.body.gender || siteManager.gender;
		siteManager.telephone = req.body.telephone || siteManager.telephone;
		siteManager.address = req.body.address || siteManager.address;
		siteManager.email = req.body.email || siteManager.email;
		siteManager.pic = req.body.pic || siteManager.pic;
		siteManager.experience = req.body.experience || siteManager.experience;
		if (req.body.password) {
			const salt = await bcrypt.genSalt(10);
			siteManager.password = await bcrypt.hash(req.body.password, salt);
		}
		const updatedSiteManager = await siteManager.save();

		res.json({
			_id: updatedSiteManager._id,
			siteManagerId: updatedSiteManager.siteManagerId,
			name: updatedSiteManager.name,
			dob: updatedSiteManager.dob,
			nic: updatedSiteManager.nic,
			gender: updatedSiteManager.gender,
			telephone: updatedSiteManager.telephone,
			address: updatedSiteManager.address,
			email: updatedSiteManager.email,
			pic: updatedSiteManager.pic,
			experience: updatedSiteManager.experience,
			token: generateToken(updatedSiteManager._id),
		});
	} else {
		res.status(404);
		throw new Error("Site Manager Not Found !");
	}
});

const updateSiteManagerProfileById = asyncHandler(async (req, res) => {
	const siteManager = await SiteManager.findById(req.params._id);

	if (siteManager) {
		siteManager.siteManagerId = req.body.siteManagerId || siteManager.siteManagerId;
		siteManager.name = req.body.name || siteManager.name;
		siteManager.dob = req.body.dob || siteManager.dob;
		siteManager.nic = req.body.nic || siteManager.nic;
		siteManager.gender = req.body.gender || siteManager.gender;
		siteManager.telephone = req.body.telephone || siteManager.telephone;
		siteManager.address = req.body.address || siteManager.address;
		siteManager.email = req.body.email || siteManager.email;
		siteManager.pic = req.body.pic || siteManager.pic;
		siteManager.experience = req.body.experience || siteManager.experience;
		if (req.body.password) {
			const salt = await bcrypt.genSalt(10);
			siteManager.password = await bcrypt.hash(req.body.password, salt);
		}
		const updatedSiteManager = await siteManager.save();

		res.json({
			_id: updatedSiteManager._id,
			siteManagerId: updatedSiteManager.siteManagerId,
			name: updatedSiteManager.name,
			dob: updatedSiteManager.dob,
			nic: updatedSiteManager.nic,
			gender: updatedSiteManager.gender,
			telephone: updatedSiteManager.telephone,
			address: updatedSiteManager.address,
			email: updatedSiteManager.email,
			pic: updatedSiteManager.pic,
			experience: updatedSiteManager.experience,
			token: generateToken(updatedSiteManager._id),
		});
	} else {
		res.status(404);
		throw new Error("Site Manager Not Found !");
	}
});

const deleteSiteManagerProfile = asyncHandler(async (req, res) => {
	const siteManager = await SiteManager.findById(req.siteManager._id);

	if (siteManager) {
		await siteManager.remove();
		res.json({ message: "Site Manager Removed !" });
	} else {
		res.status(404);
		throw new Error("Site Manager not Found !");
	}
});

const deleteSiteManagerProfileById = asyncHandler(async (req, res) => {
	const siteManager = await SiteManager.findById(req.params._id);

	if (siteManager) {
		await siteManager.remove();
		res.json({ message: "Site Manager Removed !" });
	} else {
		res.status(404);
		throw new Error("Site Manager not Found !");
	}
});

module.exports = {
	registerSiteManager,
	authSiteManager,
	getSiteManagers,
	getSiteManagerProfile,
	getSiteManagerProfileById,
	updateSiteManagerProfile,
	updateSiteManagerProfileById,
	deleteSiteManagerProfile,
	deleteSiteManagerProfileById,
};
