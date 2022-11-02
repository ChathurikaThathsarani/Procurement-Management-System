const { expect } = require("chai");
const { registerSupplier } = require("../controllers/supplierController");

describe("Testing the supplier routes", () => {
	it("Create supplier", async () => {
		const returnedSupplier = registerSupplier({
			supplierId: "SU002",
			ownerName: "test2",
			dob: "2022-12-12",
			nic: "997193245V",
			gender: "female",
			telephone: "123",
			companyName: "test2",
			companyAddress: "test2",
			email: "test@gmail.com",
			password: "test",
			pic: "test",
			suppliyingMaterials: "Sheets",
		});
		const supplier = {
			name: "test2",
		};
		expect(returnedSupplier.ownerName).to.equal(supplier.ownerName);
	});
});
