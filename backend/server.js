const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db");
const adminRoutes = require("./routes/adminRoutes");
const trainerRoutes = require("./routes/trainerRoutes");
const customerRoutes = require("./routes/customerRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();
app.use(express.json());
app.use("*", cors());

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.use("/user/admin", adminRoutes);
app.use("/user/trainer", trainerRoutes);
app.use("/user/customer", customerRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Started on port ${PORT}..`));
