const AsyncHandler = require("express-async-handler");

const registerUser = AsyncHandler(async (req, res) => {
  //   const { name, email, password, phone, lat, lon, address } = req.body;
  //   if (!name || !email || !password) {
  //     res.status(400);
  //     throw new error("Please enter all fields");
  //   }
  //   const userExists = await user.findOne({ email });
  //   if (userExists) {
  //     res.status(400);
  //     throw new Error("User already exists");
  //   }
  //   const new_user = await user.create({
  //     Name: req.body.name,
  //     Email: req.body.email,
  //     Password: req.body.password,
  //     Phone: req.body.phone,
  //     Lat: lat,
  //     Lon: lon,
  //     Address: address,
  //   });
  //   if (new_user) {
  //     res.status(201).json({
  //       _id: new_user._id,
  //       name: new_user.Name,
  //       email: new_user.Email,
  //       phone: new_user.Phone,
  //       token: generateToken(new_user.Email),
  //     });
  //   } else {
  //     res.status(400);
  //     throw new error("User not found");
  //   }
  res.send("Working");
});

const authUser = AsyncHandler(async (req, res) => {
  //   const { email, password } = req.body;
  //   const user2 = await user.findOne({ Email: email });
  //   if (user2) {
  //     if (await user2.matchPassword(password)) {
  //       res.json({
  //         _id: user2._id,
  //         name: user2.Name,
  //         email: user2.Email,
  //         phone: user2.Phone,
  //         token: generateToken(user2.Email),
  //       });
  //     } else {
  //       res.status(401);
  //       throw new Error("Invalid email and password");
  //     }
  //   } else {
  //     res.status(401);
  //     throw new Error("Invalid email and password");
  //   }
  res.send("Working");
});

module.exports = { registerUser, authUser };
