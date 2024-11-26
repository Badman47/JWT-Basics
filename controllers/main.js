const jwt = require("jsonwebtoken");
const {BadRequestError} = require("../errors/index.js");

// First, we need to check the login
const login = async (req, res) => {
  // Saving our username and password in req.body
  const { username, password } = req.body;

  // Checking if the username and password matches
  if (!username || !password) {
    throw new BadRequestError("Please provide a valid username & password");
  }

  // Creating an id for dummy purpose
  const id = new Date().getDate();

  // Creating a token & signing a signature
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: "30d" });

  // Sending the response
  res.status(200).json({ msg: `User created`, token });
};

// Second for Dashboard
const dashboard = async (req, res) => {
	//assigning a random num to show as a restricted data
  const luckyNumber = Math.floor(Math.random() * 99);
  res.status(200).json({ msg: `${req.user.username}`, secret: `Auth & Token Success: Here is the restricted data ${luckyNumber}` });
};

module.exports = {
  login,
  dashboard
};

