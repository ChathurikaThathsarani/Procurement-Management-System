const { expect } = require("chai");
const { createSite, updateSite } = require("../controllers/siteController");

describe("Testing the site routes", () => {
	it("Create site", async () => {
		const returnedSite = createSite({
			siteId: "ST002",
			siteName: "kandy SLIIT",
			siteAddress: "Kandy",
			siteContactNumber: "0112345347",
			budget: 20000000,
			siteManagerName: "Imasha Fernando",
		});
		const site = {
			name: "kandy SLIIT",
		};
		expect(returnedSite.siteName).to.equal(site.siteName);
	});

	it("Update site", async () => {
		const returnedSite = updateSite({
			siteId: "ST002",
			siteName: "kandy SLIIT",
			siteAddress: "Kandy",
			siteContactNumber: "0112345347",
			budget: 20000000,
			siteManagerName: "Imasha Fernando",
		});
		const site = {
			name: "kandy SLIIT",
		};
		expect(returnedSite.siteName).to.equal(site.siteName);
	});
});
