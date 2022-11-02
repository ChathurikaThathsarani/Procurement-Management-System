const { expect } = require("chai");
const { createOrder } = require("../controllers/orderController");

describe("Testing the order routes", () => {
	it("Create draft order", async () => {
		const placedDate = "2022-10-10";
		const requiredDate = "2022-10-10";
		const supplierName = "Metro Suppliers";

		const returnedOrder = createOrder({
			siteManagerId: "63459dc7ebca0f8af497c164",
			placedDate,
			requiredDate,
			supplierName,
		});
		const order = {
			name: "Metro Suppliers",
		};
		expect(returnedOrder.supplierName).to.equal(order.supplierName);
	});
});
