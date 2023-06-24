const express = require("express");
const app = express();

const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
app.use(express.json());
app.use(cors());

// app.use()
// app.use()
// app.use()
const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});
