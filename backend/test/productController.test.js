const { expect } = require("chai");
const { createProduct, updateSupplierProduct } = require("../controllers/productController");

describe("Testing the product routes", () => {
	it("Create product", async () => {
		const returnedProduct = createProduct({
			supplier: "635f963f85e16e200148868e",
			productName: "River sand",
			productPrice: "10000",
			productDescription: "test",
			companyName: "Metro Suppliers",
		});
		const product = {
			name: "kandy SLIIT",
		};
		expect(returnedProduct.productName).to.equal(product.productName);
	});

	it("Update product", async () => {
		const returnedProduct = updateSupplierProduct({
			supplier: "635f963f85e16e200148868e",
			productName: "River sand",
			productPrice: "10000",
			productDescription: "test",
			companyName: "Metro Suppliers",
		});
		const product = {
			name: "kandy SLIIT",
		};
		expect(returnedProduct.productName).to.equal(product.productName);
	});
});
