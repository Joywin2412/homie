const express = require("express");
const app = express();
const { notAvailable, errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/routes1");

dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);
app.use(notAvailable);
app.use(errorHandler);

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});
