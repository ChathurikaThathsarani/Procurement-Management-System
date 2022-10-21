const Site = require("../models/siteModel");
const asyncHandler = require("express-async-handler");
const createSite = asyncHandler(async (req, res) => {
	const { siteId, siteName, siteAddress, siteContactNumber, budget, siteManager } = req.body;

	if (!siteId || !siteName || !siteAddress || !siteContactNumber || !budget || !siteManager) {
		res.status(400);
		throw new Error("Please Fill all the feilds");
	} else {
		const site = new Site({
			siteId,
			siteName,
			siteAddress,
			siteContactNumber,
			budget,
			siteManager,
		});

		const createdSite = await site.save();

		res.status(201).json(createdSite);
	}
});

module.exports = {
	createSite,
};
