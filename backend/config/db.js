const mongoose = require("mongoose");
/**
 * This method is implemented to
 * get the database connection to
 * the system
 */
const connectDB = async () => {
	let conn;
	try {
		if (conn == null) {
			conn = await mongoose.connect(process.env.MONGO_URI, {
				useUnifiedTopology: true,
				useNewUrlParser: true,
			});
		}
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit();
	}
};

module.exports = connectDB;
