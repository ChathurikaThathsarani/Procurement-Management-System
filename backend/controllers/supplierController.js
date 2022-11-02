/**
 * This controller is implemented for
 * the supplier user management
 */
const asyncHandler = require("express-async-handler");
const Supplier = require("../models/supplierModel");
const {} = require("../routes/supplierRoutes");
const {} = require("../routes/siteManagerRoutes");
const generateToken = require("../utils/generateToken");
const bcrypt = require("bcryptjs");

/**
 * This method is implemented to
 * register a new supplier to the system
 */
const registerSupplier = asyncHandler(async (req, res) => {
	const {
		supplierId,
		ownerName,
		dob,
		nic,
		gender,
		telephone,
		companyName,
		companyAddress,
		email,
		password,
		pic,
		suppliyingMaterials,
	} = req.body;

	const supplierExists = await Supplier.findOne({ nic });
	if (supplierExists) {
		res.status(400);
		throw new Error("Supplier Profile Exists !");
	}

	const supplier = new Supplier({
		supplierId,
		ownerName,
		dob,
		nic,
		gender,
		telephone,
		companyName,
		companyAddress,
		email,
		password,
		pic,
		suppliyingMaterials,
	});

	const salt = await bcrypt.genSalt(10);

	supplier.password = await bcrypt.hash(password, salt);

	await supplier.save();

	if (supplier) {
		res.status(201).json({
			_id: supplier._id,
			ownerName: supplier.ownerName,
			dob: supplier.dob,
			nic: supplier.nic,
			gender: supplier.gender,
			telephone: supplier.telephone,
			companyName: supplier.companyName,
			companyAddress: supplier.companyAddress,
			email: supplier.email,
			pic: supplier.pic,
			suppliyingMaterials: supplier.suppliyingMaterials,
			token: generateToken(supplier._id),
		});
	} else {
		res.status(400);
		throw new Error("Supplier Registration Failed !");
	}
});

/**
 * This method is implemented to
 * login a supplier
 */
const authSupplier = asyncHandler(async (req, res) => {
	const { nic, password } = req.body;

	const supplier = await Supplier.findOne({ nic });

	if (!supplier) {
		res.status(400);
		throw new Error("Invalid NIC or Password");
	}

	const isMatch = await bcrypt.compare(password, supplier.password);

	if (!isMatch) {
		res.status(400);
		throw new Error("Invalid NIC or Password");
	} else {
		res.status(201).json({
			_id: supplier._id,
			supplierId: supplier.supplierId,
			ownerName: supplier.ownerName,
			dob: supplier.dob,
			nic: supplier.nic,
			gender: supplier.gender,
			telephone: supplier.telephone,
			companyName: supplier.companyName,
			companyAddress: supplier.companyAddress,
			email: supplier.email,
			pic: supplier.pic,
			suppliyingMaterials: supplier.suppliyingMaterials,
			token: generateToken(supplier._id),
		});
	}
});

/**
 * This method is implemented to
 * get all supplier account details to the staff
 */
const getSuppliers = asyncHandler(async (req, res) => {
	const suppliers = await Supplier.find();
	res.json(suppliers);
});

/**
 * This method is implemented to
 * view own supplier account by the supplier
 */
const getSupplierProfile = asyncHandler(async (req, res) => {
	const supplier = await Supplier.findById(req.supplier._id);

	if (supplier) {
		res.json(supplier);
	} else {
		res.status(400);
		throw new Error("Supplier not found !");
	}
});

/**
 * This method is implemented to
 * get the supplier profile for staff
 */
const getSupplierProfileById = asyncHandler(async (req, res) => {
	const supplier = await Supplier.findById(req.params._id);

	if (supplier) {
		res.json(supplier);
	} else {
		res.status(400);
		throw new Error("Supplier not found !");
	}
});

/**
 * This method is implemented to
 * update the supplier account
 */
const updateSupplierProfile = asyncHandler(async (req, res) => {
	const supplier = await Supplier.findById(req.supplier._id);

	if (supplier) {
		supplier.supplierId = req.body.supplierId || supplier.supplierId;
		supplier.ownerName = req.body.ownerName || supplier.ownerName;
		supplier.dob = req.body.dob || supplier.dob;
		supplier.nic = req.body.nic || supplier.nic;
		supplier.gender = req.body.gender || supplier.gender;
		supplier.telephone = req.body.telephone || supplier.telephone;
		supplier.companyName = req.body.companyName || supplier.companyName;
		supplier.companyAddress = req.body.companyAddress || supplier.companyAddress;
		supplier.email = req.body.email || supplier.email;
		supplier.pic = req.body.pic || supplier.pic;
		supplier.suppliyingMaterials = req.body.suppliyingMaterials || supplier.suppliyingMaterials;
		if (req.body.password) {
			const salt = await bcrypt.genSalt(10);
			supplier.password = await bcrypt.hash(req.body.password, salt);
		}
		const updatedSupplier = await supplier.save();

		res.json({
			_id: updatedSupplier._id,
			supplierId: updatedSupplier.supplierId,
			ownerName: updatedSupplier.ownerName,
			dob: updatedSupplier.dob,
			nic: updatedSupplier.nic,
			gender: updatedSupplier.gender,
			telephone: updatedSupplier.telephone,
			companyName: updatedSupplier.companyName,
			companyAddress: updatedSupplier.companyAddress,
			email: updatedSupplier.email,
			pic: updatedSupplier.pic,
			suppliyingMaterials: updatedSupplier.suppliyingMaterials,
			token: generateToken(updatedSupplier._id),
		});
	} else {
		res.status(404);
		throw new Error("Supplier Not Found !");
	}
});

/**
 * This method is implemented to
 * update the supplier account by id
 */
const updateSupplierProfileById = asyncHandler(async (req, res) => {
	const supplier = await Supplier.findById(req.params._id);

	if (supplier) {
		supplier.supplierId = req.body.supplierId || supplier.supplierId;
		supplier.ownerName = req.body.ownerName || supplier.ownerName;
		supplier.dob = req.body.dob || supplier.dob;
		supplier.nic = req.body.nic || supplier.nic;
		supplier.gender = req.body.gender || supplier.gender;
		supplier.telephone = req.body.telephone || supplier.telephone;
		supplier.companyName = req.body.companyName || supplier.companyName;
		supplier.companyAddress = req.body.companyAddress || supplier.companyAddress;
		supplier.email = req.body.email || supplier.email;
		supplier.pic = req.body.pic || supplier.pic;
		supplier.suppliyingMaterials = req.body.suppliyingMaterials || supplier.suppliyingMaterials;
		if (req.body.password) {
			const salt = await bcrypt.genSalt(10);
			supplier.password = await bcrypt.hash(req.body.password, salt);
		}
		const updatedSupplier = await supplier.save();

		res.json({
			_id: updatedSupplier._id,
			supplierId: updatedSupplier.supplierId,
			ownerName: updatedSupplier.ownerName,
			dob: updatedSupplier.dob,
			nic: updatedSupplier.nic,
			gender: updatedSupplier.gender,
			telephone: updatedSupplier.telephone,
			companyName: updatedSupplier.companyName,
			companyAddress: updatedSupplier.companyAddress,
			email: updatedSupplier.email,
			pic: updatedSupplier.pic,
			suppliyingMaterials: updatedSupplier.suppliyingMaterials,
			token: generateToken(updatedSupplier._id),
		});
	} else {
		res.status(404);
		throw new Error("Supplier Not Found !");
	}
});

/**
 * This method is implemented to
 * delete a supplier account
 */
const deleteSupplierProfile = asyncHandler(async (req, res) => {
	const supplier = await Supplier.findById(req.supplier._id);

	if (supplier) {
		await supplier.remove();
		res.json({ message: "Supplier Removed !" });
	} else {
		res.status(404);
		throw new Error("Supplier not Found !");
	}
});

/**
 * This method is implemented to
 * delete a supplier account by staff
 */
const deleteSupplierProfileById = asyncHandler(async (req, res) => {
	const supplier = await Supplier.findById(req.params._id);

	if (supplier) {
		await supplier.remove();
		res.json({ message: "Supplier Removed !" });
	} else {
		res.status(404);
		throw new Error("Supplier not Found !");
	}
});

module.exports = {
	registerSupplier,
	authSupplier,
	getSuppliers,
	getSupplierProfile,
	getSupplierProfileById,
	updateSupplierProfile,
	updateSupplierProfileById,
	deleteSupplierProfile,
	deleteSupplierProfileById,
};
