const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db");
const siteManagerRoutes = require("./routes/siteManagerRoutes");
const supplierRoutes = require("./routes/supplierRoutes");
const staffRoutes = require("./routes/staffRoutes.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();
app.use(express.json());
app.use("*", cors());

app.get("/", (req, res) => {
	res.send("API is Running");
});

app.use("/user/manager", siteManagerRoutes);
app.use("/user/supplier", supplierRoutes);
app.use("/user/staff", staffRoutes);

app.use(notFound);
app.use(errorHandler);



const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Started on port ${PORT}..`));
