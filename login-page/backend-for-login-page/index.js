const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = 4000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded());

mongoose.connect(
  "mongodb://localhost:27017/loginPageDB",
  ({
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }.then = () => {
    console.log("connected to db.");
  })
);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

// Routes
app.post("/register", (req, res) => {
  const { name, email, password, reEnterPassword } = req.body;

  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ Message: "User is already registered." });
    } else {
      const user = new User({
        name: name,
        email: email,
        password: password,
        reEnterPassword: reEnterPassword,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ Message: "Successfully Registered. Please Login Now." });
        }
      });
    }
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ Message: "Successfully Login.", user: user });
      } else {
        res.send({ Message: "Password Didn't Match" });
      }
    } else {
      res.send({ Message: "User Not Registered." });
    }
  });
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
