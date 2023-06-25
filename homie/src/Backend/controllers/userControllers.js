// what logic do you want to apply after getting data from user

const AsyncHandler = require("express-async-handler");
const user = require("../models/usermodel1.js");
const serviceProviderModel = require("../models/serviceProducerSchema.js");
const generateToken = require("../config/generateToken.js");
const serviceTicket = require("../models/serviceTicketSchema.js");
const feedbackProvider = require("../models/feedbackSchema.js");
const serviceProducer = require("../models/serviceProducerSchema.js");
const rgbmanip =  require("../utils/rgbmanipulator.js");
const furnituremanip = require("../utils/furniture.js");

const registerUser = AsyncHandler(async (req, res) => {
  const { name, email, password, phone} = req.body;
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

const serviceProviders= AsyncHandler(async(req,res)=>{
  try {
    const serviceProvider = await serviceProviderModel.find({});
    res.json(serviceProvider);
  } catch (error) {
    throw new Error("Error in finding in service provider");
  }
});

const getServiceTickets = AsyncHandler(async(req,res)=>{
  const email = req.params.id;
  
  try{
    const serviceTicketData = await serviceTicket.find({Email : email});
    res.status(200).json(serviceTicketData);
  }
  catch(err){
    console.log(err);
    throw new Error("No service tickets available");
  }
});
const getServiceTicketsByProducer = AsyncHandler(async(req,res)=>{
  const email = req.params.id;
  const prod = req.params.prod;
  try{
    const serviceTicketData = await serviceTicket.find({Email : email,ServiceProducer:prod});
    res.status(200).json(serviceTicketData);
  }
  catch(err){
    console.log(err);
    throw new Error("No service tickets available");
  }
});
const addServiceTickets = AsyncHandler(async(req,res)=>{
  const {email,problem,userName} = req.body;
  // console.log(email,problem,userName);
  let producerResponse;
  if(userName === "Angel")
  producerResponse = rgbmanip();
  else{
    producerResponse = furnituremanip();
  }
  try{
    await serviceTicket.create({Email : email , Problem : problem,Status : "Accepted",ServiceProducer: userName,
  Response:producerResponse});
    res.status(200).json("Successfully created");
  }
  catch(err){
    console.log(err);
    throw new Error("Error in creating service tickets");
  }
});

const getFeedback = AsyncHandler(async(req,res)=>{
  const userName = req.params.id;
  // const {email} = req.body;
  try{
    const feedbackData = await feedbackProvider.find({ServiceProducer : userName});
    res.status(200).json(feedbackData);
  }
  catch(err){
    console.log(err);
    throw new Error("No service tickets available");
  }
});
const addFeedback = AsyncHandler(async(req,res)=>{
  const {name,feedback,userName} = req.body;
  try{
    await feedbackProvider.create({Name : name ,Likes : 0 , Comment : feedback,reportFlag : 0 ,ServiceProducer:userName});
    res.status(200).json("Successfully created");
  }
  catch(err){
    console.log(err);
    throw new Error("Error in creating feedback");
  }
});
const getServiceProducer = AsyncHandler(async(req,res)=>{
  try{
    const serviceProducerData = await serviceProducer.find();
    res.status(200).json(serviceProducerData);
  }
  catch(err){
    console.log(err);
    throw new Error("No service producers available");
  }
});
const getIdServiceTickets = AsyncHandler(async(req,res)=>{
  const email = req.params.id;
  const _id = req.params.id2;
  try{
    const serviceTicketData = await serviceTicket.find({_id:_id});
    res.status(200).json(serviceTicketData);
  }
  catch(err){
    console.log(err);
    throw new Error("No service tickets available");
  }
});
const addLikes = AsyncHandler(async(req,res)=>{
  const serviceId = req.body;
  try{
    const serviceTicketData = await feedbackProvider.find({});
    res.status(200).json(serviceTicketData);
  }
  catch(err){
    console.log(err);
    throw new Error("No service tickets available");
  }
});
module.exports = {
  registerUser,
  authUser,
  profileUser,
  getServiceTickets,
  getServiceTicketsByProducer,
  addServiceTickets,
  getFeedback,
  addFeedback,
  serviceProviders,
  getServiceProducer,
  getIdServiceTickets,
  addLikes
};

// Request must be in lower case while the schema is in upper case
