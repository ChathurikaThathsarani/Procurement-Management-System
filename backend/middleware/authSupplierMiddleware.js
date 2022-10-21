const jwt = require("jsonwebtoken");
const Supplier = require("../models/supplierModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
	let token;

	if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
		try {
			token = req.headers.authorization.split(" ")[1];

			const decoded = jwt.verify(token, process.env.JWT_SECRET);

			req.supplier = await Supplier.findById(decoded.id).select("-password");

			next();
		} catch (error) {
			res.status(401);
			throw new Error("Not Authorized, Token Failed !");
		}
	}

	if (!token) {
		res.status(401);
		throw new Error("Not Authorized, No Token !");
	}
});

module.exports = { protect };
