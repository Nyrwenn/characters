require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;
const userRoutes = require("../backend/routes/userRoutes");

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfull connexion to MongoDB !"))
  .catch((error) => console.log("Connexion to MongoDB failed !", error));

app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
