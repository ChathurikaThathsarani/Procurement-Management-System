const { expect } = require("chai");
const { createGoodReceipt } = require("../controllers/goodReceiptController");

describe("Testing the good receipt routes routes", () => {
	it("Create good receipt", async () => {
		const returnedGoodReceipt = createGoodReceipt({
			orderNo: "ref6346f2bcde129f032b2e06d2",
			productName: "Cement",
			productQuantity: 5,
			deliveryDate: "2022-10-15",
		});
		const goodReceipt = {
			name: "Cement",
		};
		expect(returnedGoodReceipt.productName).to.equal(goodReceipt.productName);
	});
});
