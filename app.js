require("dotenv").config();
const express = require("express");

const PORT = process.env.PORT || 3000;
const numberRoute = require("./routes/numberRoute");

const app = express();

app.use(express.json());

app.use("/api", numberRoute);

app.listen(PORT, () => {
  console.log(`Your app is currently running on port ${PORT}`);
});
