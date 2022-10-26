const Site = require("../models/siteModel");
const asyncHandler = require("express-async-handler");


const getSite = asyncHandler(async (req, res) => {
	const site = await site.find();
	res.json(site);
});

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

// edit delete view and single



const getSiteId = asyncHandler(async (req, res) => {
	const site = await Site.findById(req.params.id);

	if (site) {
		res.json(site);
	} else {
		res.status(404).json({ message: "Site not found" });
	}
});

const updateSite = asyncHandler(async (req, res) => {
	const { siteId, siteName, siteAddress, siteContactNumber, budget, siteManager } = req.body;

	const site = await Site.findById(req.params.id);

	if (site) {
		site.siteId = siteId;
		site.siteName = siteName;
		site.siteAddress = siteAddress;
		site.siteContactNumber = siteContactNumber;
		site.budget = budget;
		site.siteManager = siteManager;

		const updateSite = await site.save();
		res.json(updateSite);
	} else {
		res.status(404);
		throw new Error("site is not found");
	}
});

const deleteSite = asyncHandler(async (req, res) => {
	const site = await Site.findById(req.params.id);

	if (site) {
		await site.remove();
		res.json({ message: "Site is Removed" });
	} else {
		res.status(404);
		throw new Error("Site Remove is Failed");
	}
});
module.exports = {
	createSite,
	updateSite,
	getSite,
	getSiteId,
	deleteSite, 
};
