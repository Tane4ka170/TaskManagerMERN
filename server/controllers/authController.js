const User = require("../../database/model/user.model");
const jwt = require("jsonwebtoken");
const validator = require("email-validator");

const signIn = (req, res) => {
  let { email, password } = req.body;
};

const register = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    if (!username)
      return res.status(400).send("Username is required to proceed");

    if (!email) return res.status(400).send("Email is required to proceed");

    if (!validator.validate(email))
      return res.status(400).send("Please enter a valid email address");

    if (!password || password.length < 6)
      return res.status(400).send("Please enter a valid password");

    const userExist = await User.findOne();
  } catch (error) {}
};
