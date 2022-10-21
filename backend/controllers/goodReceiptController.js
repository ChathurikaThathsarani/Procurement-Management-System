const GoodReceipt = require("../models/goodReceiptModel");
const asyncHandler = require("express-async-handler");
const createGoodReceipt = asyncHandler(async (req, res) => {
	const { orderNo, productName, productQuantity, deliveryDate } = req.body;

	if (!orderNo || !productName || !productQuantity || !deliveryDate) {
		res.status(400);
		throw new Error("Please Fill all the feilds");
	} else {
		const goodReceipt = new GoodReceipt({
			orderNo,
			productName,
			productQuantity,
			deliveryDate,
		});

		const createdGoodReceipt = await goodReceipt.save();

		res.status(201).json(createdGoodReceipt);
	}
});

const getReceipts = asyncHandler(async (req, res) => {
	const receipts = await GoodReceipt.find();
	res.json(receipts);
});

module.exports = {
	createGoodReceipt,
	getReceipts,
};
