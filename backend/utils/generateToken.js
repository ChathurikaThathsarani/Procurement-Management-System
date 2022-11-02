const jwt = require("jsonwebtoken");

/**
 * This method is implemented to
 * to geneerate token
 */
const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: "30d",
	});
};

module.exports = generateToken;
