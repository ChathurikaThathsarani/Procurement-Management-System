const jwt = require("jsonwebtoken");
const SiteManager = require("../models/siteManagerModel.js");
const asyncHandler = require("express-async-handler");
/**
 * This method is implemented to
 * to authorize the routes for
 * site manager
 */
const protect = asyncHandler(async (req, res, next) => {
	let token;

	if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
		try {
			token = req.headers.authorization.split(" ")[1];

			const decoded = jwt.verify(token, process.env.JWT_SECRET);

			req.siteManager = await SiteManager.findById(decoded.id).select("-password");

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
