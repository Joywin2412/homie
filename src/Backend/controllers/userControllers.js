const AsyncHandler = require("express-async-handler");
const user = require("../models/usermodel1");
const registerUser = AsyncHandler(async (req, res) => {
  const { name, email, password, phone, lat, lon, address } = req.body;
  if (!name || !email || !password || !phone) {
    res.status(400);
    throw new Error("Some fields missing");
  }
  const userExists = await user.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const new_user = await user.create({
    name: name,
    email: email,
    password: password,
    phone: phone,
  });

  if (new_user) {
    res.status(201).json({
      _id: new_user._id,
      name: new_user.Name,
      email: new_user.Email,
      phone: new_user.Phone,
      token: generateToken(new_user.Email),
    });
  } else {
    res.status(400);
    throw new Error("Error in creating a new user");
  }
});

const authUser = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user2 = await user.findOne({ Email: email });
  if (user2) {
    if (await user2.matchPassword(password)) {
      res.json({
        _id: user2._id,
        name: user2.Name,
        email: user2.Email,
        phone: user2.Phone,
        token: generateToken(user2.Email),
      });
    } else {
      res.status(401);
      throw new Error("Invalid email and password");
    }
  } else {
    res.status(401);
    throw new Error("Invalid email and password");
  }
});

module.exports = { registerUser, authUser };
