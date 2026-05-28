const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");

const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");

const mechanicRoutes = require("./routes/mechanicRoutes");

const requestRoutes = require("./routes/requestRoutes");

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/requests", requestRoutes);

mongoose
  .connect(process.env.MONGO_URI)

  .then(() => {
    console.log("MongoDB Connected");
  })

  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Mechanical Buddy Backend Running");
});

app.use("/api/auth", authRoutes);

app.use("/api/mechanics", mechanicRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
