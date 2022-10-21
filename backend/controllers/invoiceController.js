const Invoice = require("../models/invoiceModel");
const asyncHandler = require("express-async-handler");
const createInvoice = asyncHandler(async (req, res) => {
	const { orderNo, bank, branch, accountNumber, depositAmount, depositDate } = req.body;

	if (!orderNo || !bank || !branch || !accountNumber || !depositAmount || !depositDate) {
		res.status(400);
		throw new Error("Please Fill all the feilds");
	} else {
		const invoice = new Invoice({
			orderNo,
			bank,
			branch,
			accountNumber,
			depositAmount,
			depositDate,
		});

		const createdInvoice = await invoice.save();

		res.status(201).json(createdInvoice);
	}
});

const getInvoices = asyncHandler(async (req, res) => {
	const invoices = await Invoice.find();
	res.json(invoices);
});

module.exports = {
	createInvoice,
	getInvoices,
};
