const router = require("express").Router();
const User = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {
  RegisterValidation,
  LoginValidation,
} = require("../validation/userValidation");

//* Register a new user
router.post("/register", async (req, res) => {
  // Validate data before create the user
  const { value, error } = RegisterValidation(req.body);
  // If error with the data return the error
  if (error) return res.status(400).send(error.details[0].message);
  // Check if email is registered
  const isRegistered = await User.findOne({ email: value.email });
  if (isRegistered) return res.status(400).send("Email already exists");
  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(value.password, salt);

  // Create and save the user to the DB
  const user = new User({
    email: value.email,
    name: value.name,
    password: hashedPassword,
  });
  try {
    await user.save((err, usr) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.send(usr);
        // res.send({ user: usr._id });
      }
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

//* Login User
router.post("/login", async (req, res) => {
  // Validate data before login the user, If error with the data return the error
  const { value, error } = LoginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if email is registered
  const user = await User.findOne({ email: value.email });
  if (!user) return res.status(400).send("Email not found");

  // Check if password is correct
  const validPassword = await bcrypt.compare(value.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid password");

  // Generate JWT
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
});

module.exports = router;
