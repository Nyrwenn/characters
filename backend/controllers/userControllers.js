require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.signup = async (req, res, next) => {
  try {
    const username = await User.findOne({
      username: req.body.username,
    });

    const email = await User.findOne({
      email: req.body.email,
    });

    if (username) {
      throw new Error("This username already exists !");
    }

    if (email) {
      throw new Error("This email is already taken !");
    }

    const hash = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    user.save();
    res.status(201).json({ message: "User has been created ! " });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (!user) {
      throw new Error("Wrong username !");
    }

    const compare = await bcrypt.compare(req.body.password, user.password);
    if (!compare) {
      throw new Error("Wrong password !");
    }

    return res.status(200).json({
      userId: user.id,
      token: jwt.sign({ userId: user.id }, process.env.PassJWT, {
        expiresIn: "24h",
      }),
    });
  } catch (error) {
    res.status(403).json({ error });
  }
};

exports.me = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.PassJWT);
    const userId = decodedToken.userId;

    const user = await User.findOne({ _id: userId });

    if (!user) {
      throw new Error("User not found !");
    }

    if (!userId) {
      throw new Error("Bad token !");
    }

    return res.status(200).json({
      userId: user.id,
      token: jwt.sign({ userId: user.id }, process.env.PassJWT, {
        expiresIn: "24h",
      }),
    });
  } catch (error) {
    res.status(403).json({ error });
  }
};
