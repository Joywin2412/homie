// what logic do you want to apply after getting data from user

const AsyncHandler = require("express-async-handler");
const user = require("../models/usermodel1.js");
const generateToken = require("../config/generateToken.js");
const serviceTicket = require("../models/serviceTicketSchema.js");
const registerUser = AsyncHandler(async (req, res) => {
  const { name, email, password, phone, lat, lon, address } = req.body;
  // console.log(lat, lon);
  if (!name || !email || !password) {
    res.status(400);
    throw new error("Please enter all fields");
  }

  const userExists = await user.findOne({ email });
  //   condition of same email existing as now
  // console.log(req.body);
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  // console.log("User created");

  const new_user = await user.create({
    Name: req.body.name,
    Email: req.body.email,
    Password: req.body.password,
    Phone: req.body.phone,
    Lat: lat,
    Lon: lon,
    Address: address,
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
    throw new error("User not found");
  }
});

const authUser = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user2 = await user.findOne({ Email: email });
  // console.log(email, password);
  if (user2) {
    // console.log(user2.Password);
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

const profileUser = AsyncHandler(async (req, res) => {
  const id = req.params.id;
  // console.log(name);
  const user2 = await user.findOne({ Email: id });

  if (user2) {
    res.json({
      _id: user2._id,
      name: user2.Name,
      email: user2.Email,
      phone: user2.Phone,
      token: generateToken(user2._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email and password");
  }
});
const getServiceTickets = AsyncHandler(async(req,res)=>{
  const {email} = req.body;
  try{
    const serviceTicketData = await serviceTicket.find();
    res.status(200).json(serviceTicketData);
  }
  catch(err){
    console.log(err);
    throw new Error("No service tickets available");
  }
});
const addServiceTickets = AsyncHandler(async(req,res)=>{
  const {email,problem} = req.body;
  try{
    await serviceTicket.create({Email : email , Problem : problem,Status : "Pending"});
    res.status(200).json("Successfully created");
  }
  catch(err){
    console.log(err);
    throw new Error("Error in creating service tickets");
  }
});
module.exports = {
  registerUser,
  authUser,
  profileUser,
  getServiceTickets,
  addServiceTickets,
};

// Request must be in lower case while the schema is in upper case
