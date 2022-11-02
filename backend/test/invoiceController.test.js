const { expect } = require("chai");
const { createInvoice } = require("../controllers/invoiceController");

describe("Testing the invoice routes", () => {
	it("Create invoice", async () => {
		const returnedInvoice = createInvoice({
			orderNo: "ref6346f2bcde129f032b2e06d2",
			bank: "BOC",
			branch: "Nittambuwa",
			accountNumber: "12345678",
			depositAmount: 15000,
			depositDate: "2022-10-15",
		});
		const invoice = {
			name: "Nittambuwa",
		};
		expect(returnedInvoice.branch).to.equal(invoice.branch);
	});
});
