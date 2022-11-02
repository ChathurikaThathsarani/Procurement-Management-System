const { expect } = require("chai");
const { registerSiteManager } = require("../controllers/siteManagerController");

describe("Testing the site manager routes", () => {
	it("Create site manager", async () => {
		const returnedSiteManager = registerSiteManager({
			siteManagerId: "SM002",
			name: "Chathurika",
			dob: "2022-12-12",
			nic: "997193245V",
			gender: "female",
			telephone: "123",
			address: "test",
			email: "test@gmail.com",
			password: "test",
			pic: "test",
			experience: "2 years",
		});
		const siteManager = {
			name: "Chathurika",
		};
		expect(returnedSiteManager.name).to.equal(siteManager.name);
	});
});
