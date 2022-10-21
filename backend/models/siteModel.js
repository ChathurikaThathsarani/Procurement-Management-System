const mongoose = require("mongoose");

const siteSchema = mongoose.Schema(
	{
		siteId: {
			type: String,
			required: true,
		},
		siteName: {
			type: String,
			required: true,
		},
		siteAddress: {
			type: String,
			required: true,
		},
		siteContactNumber: {
			type: String,
			required: true,
		},
		budget: {
			type: Number,
			required: true,
		},
		siteManager: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "SiteManager",
		},
	},
	{
		timestamps: true,
	}
);

const Site = mongoose.model("Site", siteSchema);

module.exports = Site;
