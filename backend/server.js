require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT;
const userRoutes = require("../backend/routes/userRoutes");
const objectRoutes = require("../backend/routes/objectRoutes");

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfull connexion to MongoDB !"))
  .catch((error) => console.log("Connexion to MongoDB failed !", error));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(cors());

app.use("/user", userRoutes);
app.use("/object", objectRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
