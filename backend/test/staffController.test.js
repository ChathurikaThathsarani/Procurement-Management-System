const { expect } = require("chai");
const { registerStaff } = require("../controllers/staffController");

describe("Testing the staff routes", () => {
	it("Create staff", async () => {
		const returnedStaff = registerStaff({
			staffId: "SM001",
			name: "test",
			dob: "2000-01-01",
			nic: "123",
			gender: "male",
			telephone: "1234567890",
			address: "test address 01",
			email: "test@gmail.com",
			password: "test",
			qualifications: "bachelor",
			pic: "test pic",
			experience: "1 year",
		});
		const staff = {
			name: "test",
		};
		expect(returnedStaff.name).to.equal(staff.name);
	});
});
