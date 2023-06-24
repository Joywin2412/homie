const express = require("express");
const router = express.Router();
const { registerUser, authUser } = require("../controllers/userControllers");
function AuthenticateUser(req, res, next) {
  try {
    const { email } = req.body;
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET, { id: email });
    next();
  } catch (err) {
    console.log(req.url);
    console.log(err);
    return res.status(401).send({ message: "Invalid token" });
  }
}
router.route("/").post(registerUser);
router.post("/login", authUser);

module.exports = router;
