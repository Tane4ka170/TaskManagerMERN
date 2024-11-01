const User = require("../../database/model/user.model");
const jwt = require("jsonwebtoken");
const validator = require("email-validator");

const signIn = async (req, res) => {
  let { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send("The email address does not exist");
    }

    user.comparePassword(password, (err, match) => {
      if (!match || err)
        return res.status(400).send("The password does not match");

      let token = jwt.sign(
        { _id: user._id },
        "eilohqriugeiot48wt-4w9pe492q7yhvjerit",
        { expiresIn: "24h" }
      );

      res.status(200).send({
        token,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      });
    });
  } catch (error) {
    return res.status(400).send("Login was unsuccessful");
  }
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

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).send("This email is already in use");
    }

    const user = await new User({ email, username, password });

    await user.save();

    return res.status(200).send("User was added successfully");
  } catch (error) {
    return res.statusbar(400).send("An error occurred while creating the user");
  }
};
